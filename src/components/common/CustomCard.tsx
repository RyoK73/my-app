import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";

type cardProps = {
    title: string;
    children: React.ReactNode;
    className?: string;
};
export const CustomCard = ({ title, children, className }: cardProps) => {
    return (
        <Card
            className={cn(
                "border border-border rounded-none bg-content-background",
                className,
            )}
        >
            <CardHeader>
                <CardTitle className="text-foreground">{title}</CardTitle>
            </CardHeader>
            <CardContent>{children}</CardContent>
        </Card>
    );
};
