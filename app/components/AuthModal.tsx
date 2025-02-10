import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { signIn } from "../lib/auth";
import { GitHubAuthButton, GoogleAuthButton } from "./SubmitButtons";

export function AuthModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Try for Free</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px]">
                <VisuallyHidden>
                    <DialogTitle>Authentication</DialogTitle>
                </VisuallyHidden>
                <DialogHeader className="flex flex-row justify-center items-center gap-2">
                    <Image src={Logo} alt="Logo" className="size-10" />
                    <h4 className="text-2xl font-bold">
                        Cal<span className="text-primary">Flow</span>
                    </h4>
                </DialogHeader>
                <div className="flex flex-col mt-5 gap-3">
                    <form action={async () => {
                        "use server"
                        await signIn("google");

                    }} className="w-full">
                    <GoogleAuthButton />
                    </form>
                    <form action={async () => {
                        "use server"
                        await signIn("github");
                    }}>
                        <GitHubAuthButton />
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}
