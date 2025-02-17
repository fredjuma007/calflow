import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import VideoGif from "@/public/work-is-almost-over-happy.gif";
import { CalendarCheck2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OnboardingRouteTwo() {
    return (
        <div className="min-h-screen w-screen flex items-center 
        justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>You are almost Done!</CardTitle>
                    <CardDescription>
                        We have to now connect your calender to your account.
                    </CardDescription>
                    <Image src={VideoGif} alt="Work is almost over" className="w-full 
                    rounded-lg" />
                </CardHeader>
                <CardContent>
                    <Button className="w-full" asChild>
                        <Link href="/api/auth">
                        <CalendarCheck2 size={4} />
                        Connect Calender to Account</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}