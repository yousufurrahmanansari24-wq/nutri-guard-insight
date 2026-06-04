import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { HomeScreen } from "@/components/screens/HomeScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NutriGuard — Know what's in your food" },
      {
        name: "description",
        content: "Scan products and get instant safety analysis based on your health profile.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <AppShell>
      <HomeScreen />
    </AppShell>
  );
}
