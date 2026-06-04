import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { AnalysisScreen } from "@/components/screens/AnalysisScreen";

export const Route = createFileRoute("/analysis")({
  head: () => ({
    meta: [
      { title: "Product Analysis · NutriGuard" },
      {
        name: "description",
        content: "Detailed health analysis of scanned products with safer alternatives.",
      },
    ],
  }),
  component: AnalysisPage,
});

function AnalysisPage() {
  return (
    <AppShell>
      <AnalysisScreen />
    </AppShell>
  );
}
