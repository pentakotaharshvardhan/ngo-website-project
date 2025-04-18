import type { Metadata } from "next"
import VolunteerForm from "./volunteer-form"

export const metadata: Metadata = {
  title: "Volunteer - Hope Foundation",
  description:
    "Apply to become a volunteer teacher at Hope Foundation and make a difference in the lives of physically challenged children.",
}

export default function VolunteerPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Become a Volunteer Teacher</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Share your knowledge and skills to empower physically challenged children and make a lasting impact on
              their lives.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Info */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Why Volunteer With Us?</h2>
              <p className="text-muted-foreground">
                Volunteering as a teacher at Hope Foundation is a rewarding experience that allows you to make a
                meaningful difference in the lives of physically challenged children. Our volunteers play a crucial role
                in providing quality education and support to our students.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="rounded-full bg-primary/10 p-1 h-8 w-8 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Make a Meaningful Impact</h3>
                    <p className="text-sm text-muted-foreground">
                      Help children overcome barriers and reach their full potential through education.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="rounded-full bg-primary/10 p-1 h-8 w-8 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Develop New Skills</h3>
                    <p className="text-sm text-muted-foreground">
                      Gain experience in adaptive teaching methods and working with diverse needs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="rounded-full bg-primary/10 p-1 h-8 w-8 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Join a Supportive Community</h3>
                    <p className="text-sm text-muted-foreground">
                      Become part of a dedicated team of professionals and volunteers committed to inclusion.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="rounded-full bg-primary/10 p-1 h-8 w-8 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Flexible Opportunities</h3>
                    <p className="text-sm text-muted-foreground">
                      Various volunteering options available to fit your schedule and skills.
                    </p>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl pt-4">What We're Looking For</h2>
              <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                <li>Passionate individuals with teaching experience or relevant qualifications</li>
                <li>Patience, empathy, and a genuine interest in working with physically challenged children</li>
                <li>Commitment to inclusive education and creating a supportive learning environment</li>
                <li>Willingness to learn and adapt teaching methods to meet diverse needs</li>
                <li>Ability to commit to regular volunteering hours (minimum 4 hours per week)</li>
              </ul>
            </div>
            <div>
              <div className="bg-muted rounded-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-6">Apply to Volunteer</h2>
                <VolunteerForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Stories */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8 text-center">Volunteer Stories</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">JS</span>
                </div>
                <div>
                  <h3 className="font-bold">Jane Smith</h3>
                  <p className="text-sm text-muted-foreground">Math Teacher, 2 years</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Volunteering at Hope Foundation has been one of the most rewarding experiences of my life. Seeing the
                children's faces light up when they understand a new concept is priceless. I've learned so much about
                adaptability and patience."
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">MJ</span>
                </div>
                <div>
                  <h3 className="font-bold">Michael Johnson</h3>
                  <p className="text-sm text-muted-foreground">Art Instructor, 3 years</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The creativity and determination of these children inspire me every day. As an art teacher, I've seen
                how creative expression can help them build confidence and develop fine motor skills. It's been a
                transformative journey for all of us."
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">AP</span>
                </div>
                <div>
                  <h3 className="font-bold">Aisha Patel</h3>
                  <p className="text-sm text-muted-foreground">Science Teacher, 1 year</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "I joined Hope Foundation to share my love of science, but I've received so much more than I've given.
                The resilience and curiosity of these children have taught me valuable life lessons. I'm grateful to be
                part of this community."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
