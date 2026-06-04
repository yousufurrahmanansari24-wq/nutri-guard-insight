import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { ScannerScreen } from "@/components/screens/ScannerScreen";

export const Route = createFileRoute("/scan")({
  head: () => ({
    meta: [
      { title: "Scan a Product · NutriGuard" },
      { name: "description", content: "Scan any product barcode for instant safety analysis." },
    ],
  }),
  component: ScanPage,
});

function ScanPage() {
  return (
    <AppShell fullBleed>
      <div className="lg:p-8">
        <div className="mx-auto max-w-3xl">
          <ScannerScreen />
        </div>
      </div>
    </AppShell>
  );
}
