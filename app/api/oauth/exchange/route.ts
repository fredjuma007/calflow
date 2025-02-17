import prisma from "@/app/lib/db";
import { requireUser } from "@/app/lib/hooks";
import { nylas, nylasConfig } from "@/app/lib/nylas";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const session = await requireUser();

    const url = new URL(req.url);
    const code = url.searchParams.get("code");

    if(!code) {
        return Response.json("No code provided", { 
            status: 400 
        });
    }

    try {
        const response = await nylas.auth.exchangeCodeForToken({
            clientSecret: process.env.NYLAS_API_SECRET_KEY,
            clientId: process.env.NYLAS_CLIENT_ID || "",
            redirectUri: process.env.NEXT_PUBLIC_URL + "/api/oauth/exchange",
            code: code,
          });
        const {grantId, email} = response;

        await prisma.user.update({
            where: {
                id: session.user?.id,
            },
            data: {
                grantId: grantId,
                grantEmail: email,
            }
        });
    } catch (error) {
        console.log("Error exchanging code for token", error);
    }

    redirect("/dashboard");
    
}