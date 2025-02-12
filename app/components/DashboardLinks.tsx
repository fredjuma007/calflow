"use client";

import { CalendarCheck, HomeIcon, LucideProps, SettingsIcon, Users2 } from "lucide-react";
import Home from "../page";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface iAppProps {
    id: number;
    name: string;
    href: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}

export const dashboardLinks: iAppProps[] = [
    {
        id: 0,
        name: 'Events Types',
        href: '/dashboard',
        icon: HomeIcon
    },
    {
        id: 1,
        name: 'Meetings',
        href: '/dashboard/meetings',
        icon: Users2
    },
    {
        id: 2,
        name: 'Availability',
        href: '/dashboard/availability',
        icon: CalendarCheck
    },
    {
        id: 3,
        name: 'Settings',
        href: '/dashboard/settings',
        icon: SettingsIcon
    }
]

export function DashboardLinks() {
    const pathname = usePathname();
    return (
        <>
            {dashboardLinks.map((link) => (
                <Link className={cn(
                    pathname === link.href 
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground', 
                    "flex item-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary"
                )}
                 key={link.id} 
                 href={link.href}
                 >
                    <link.icon className="size-4" />
                        {link.name}
                </Link>
            ))}
        </>
    )

}