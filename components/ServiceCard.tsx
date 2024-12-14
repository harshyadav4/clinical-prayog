import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  items: string[];
}

export default function ServiceCard({
  title,
  description,
  items,
}: ServiceCardProps) {
  return (
    <Card className="bg-[#E6E7EE] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          {title}
        </CardTitle>
        <CardDescription className="text-text/80">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <CheckCircle
                className="text-secondary w-5 h-5"
                style={{ color: "var(--secondary)" }}
              />
              <span className="text-text">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
