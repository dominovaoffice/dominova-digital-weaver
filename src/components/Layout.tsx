import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingApplyButton } from "@/components/FloatingApplyButton";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { ApplyButton } from "@/components/ApplyButton";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ScrollProgressBar />
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>

      {/* Pre-footer Apply CTA */}
      <section className="py-12 lg:py-16 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-muted-foreground text-lg mb-4 font-display">Interested in kickstarting your tech career?</p>
          <ApplyButton size="lg" />
        </div>
      </section>

      <Footer />
      <FloatingApplyButton />
    </div>
  );
}
