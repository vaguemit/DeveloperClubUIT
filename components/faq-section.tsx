"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "New to coding? No worries!",
    answer:
      "Zero coding experience? Perfect! We're all about learning together. Whether you're just starting out or already building cool stuff, you'll find your tribe here. Our community is super supportive and we love helping each other level up.",
  },
  {
    question: "What we do at Developer Club?",
    answer:
      "We run all sorts of awesome events! Think hands-on coding sessions where you'll build real projects, chill coding hangouts to work on stuff together, epic hackathons where you can flex your creativity, and tech talks that'll blow your mind. Plus, we often have industry pros dropping by to share their secrets!",
  },
  {
    question: "Don't wanna miss out? Here's how to stay in the loop",
    answer:
      "Easy! Jump into our Discord server - that's where all the action happens. We post everything from event announcements to random coding memes. Plus, you'll get instant notifications about workshops, meetups, and all the cool stuff we're planning.",
  },
  {
    question: "Built something cool? Show it off!",
    answer:
      "Made something awesome? We'd love to see it! Whether it's a game, app, website, or even just a fun coding experiment, we're all about showcasing our members' work. Hit up our team on Discord, and let's get your project in the spotlight!",
  },
  {
    question: "What's the cost to join?",
    answer:
      "Absolutely free! No hidden fees, no subscription costs - just pure coding goodness. We believe great communities should be accessible to everyone. Your enthusiasm and willingness to learn are all you need to bring!",
  },
  {
    question: "Want to help run the show?",
    answer:
      "Looking to level up your involvement? Our Core Team applications open up each semester! We're always on the lookout for passionate people who want to make Developer Club even more awesome. Keep your eyes peeled for announcements - your chance to join the crew is coming!",
  },
  {
    question: "Got a killer idea for an event?",
    answer:
      "We're all ears! Whether it's a workshop idea that's been brewing in your mind or a crazy cool event concept, we want to hear it. Drop your idea in our suggestion box or grab any Core Team member for a chat. The best events often come from our community's ideas!",
  },
  {
    question: "How do the workshops actually work?",
    answer:
      "Our workshops are super hands-on and beginner-friendly! We typically run them in small groups where you'll actually code along with the instructor. No death by PowerPoint here - just real coding and real learning. Plus, we always have mentors floating around to help if you get stuck.",
  },
  {
    question: "Can I collaborate with other members?",
    answer:
      "Heck yeah! We're big on collaboration. Join our project channels on Discord, come to our coding hangouts, or pitch your idea during meetups. You'll find plenty of other members excited to team up and build something awesome together!",
  },
  {
    question: "What's the best way to start participating?",
    answer:
      "Jump right in! Join our Discord, come to the next meetup (even if you're nervous - we're super friendly!), or join one of our beginner workshops. The best way to get involved is to just show up and say hi. We promise you'll find your place in no time!",
  },
]

export default function FAQSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Got Questions? We Got Answers</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Everything you need to know about joining and being part of Developer Club. Can't find what you're looking
          for? Hit us up on Discord!
        </p>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none bg-white/5 rounded-lg px-6 hover:bg-white/[0.07] transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

