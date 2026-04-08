import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import CourseCard, { wedoCourse, spikeCourse } from "@/components/CourseCard";
import wedoIcon from "@/assets/wedo-icon.png";
import spikeIcon from "@/assets/spike-icon.png";
import { GraduationCap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSlider />

      <section id="courses" className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold font-display mb-4">
            <GraduationCap className="w-4 h-4" />
            Наши курсы
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground">
            Выберите программу обучения
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-5">
          <CourseCard {...wedoCourse} icon={wedoIcon} />
          <CourseCard {...spikeCourse} icon={spikeIcon} />
        </div>
      </section>

      <footer id="contacts" className="border-t border-border bg-muted/50 py-8">
        <div className="container mx-auto px-4 text-center font-body text-sm text-muted-foreground">
          © 2026 РобоСтарт — Онлайн-школа робототехники для детей
        </div>
      </footer>
    </div>
  );
};

export default Index;
