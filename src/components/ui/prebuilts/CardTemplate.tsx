import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";

type CardTemplateProps = {
  className?: string;
  cardTitle?: ReactNode | string;
  cardDescription?: string;
  cardContent: ReactNode | string;
  cardFooter?: ReactNode;
};

function combineClassNames(str1: string, str2: string | undefined): string {
  if (!str2) {
    return str1;
  }

  if (str1[-1] !== " ") {
    str1 += " ";
  }
  return str1 + str2;
}

export function CardTemplate({
  className,
  cardTitle,
  cardDescription,
  cardContent,
  cardFooter,
}: CardTemplateProps) {
  return (
    <Card
      className={combineClassNames(
        "!bg-[#232323] !border-[#dddddd]/[0.5]",
        className,
      )}
    >
      {/* NOTE: Subject to change */}
      {cardTitle || cardDescription ? (
        <CardHeader>
          {cardTitle ? (
            <CardTitle className="text-white/[0.8]">{cardTitle}</CardTitle>
          ) : null}
          {cardDescription ? (
            <CardDescription>{cardDescription}</CardDescription>
          ) : null}
        </CardHeader>
      ) : null}
      <CardContent>{cardContent}</CardContent>
      {cardFooter ? <CardFooter>{cardFooter}</CardFooter> : null}
    </Card>
  );
}
