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
  cardTitle?: string;
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
      <CardHeader>
        {cardTitle ? <CardTitle>{cardTitle}</CardTitle> : null}
        {cardDescription ? (
          <CardDescription>{cardDescription}</CardDescription>
        ) : null}
      </CardHeader>
      <CardContent>{cardContent}</CardContent>
      {cardFooter ? <CardFooter>{cardFooter}</CardFooter> : null}
    </Card>
  );
}
