"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-[90%] max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Ninja</CardTitle>
          <CardDescription>
            タンダム＆ビーチバギーが簡単にレンタル
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button onClick={() => router.push("/login")} className="w-full">
            アカウントをお持ちですか？ログイン
          </Button>
          <Button
            onClick={() => router.push("/signup")}
            variant="outline"
            className="w-full"
          >
            新規アカウントを登録
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
