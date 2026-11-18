import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/motion/Reveal";
import ContactDetails from "@/components/sections/contact/ContactDetails";
import ContactForm from "@/components/sections/contact/ContactForm";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: `Get in touch with ${site.name}, a backend developer in ${site.location}. Send a message, email directly, or download the résumé.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's work"
        accent="together"
        description="Ready to build something amazing? I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life."
      />
      <section className="pb-10">
        <div className="container-x grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ContactDetails />
          <Reveal variant="right" delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
