import PageTransition from "@/components/ui/PageTransition";
import ComparisonMatrix from "@/components/compare/ComparisonMatrix";

export default function ComparePage() {
  return (
    <PageTransition>
      <div className="pt-32">
        <ComparisonMatrix />
      </div>
    </PageTransition>
  );
}
