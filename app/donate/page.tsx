import type { Metadata } from "next"
import Image from "next/image"
import DonationForm from "./donation-form"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, GraduationCap, Utensils } from "lucide-react"

export const metadata: Metadata = {
  title: "Donate - Hope Foundation",
  description: "Support our mission to empower physically challenged children through your generous donations.",
}

export default function DonatePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Your Donation Makes a Difference
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Support our mission to empower physically challenged children and help them reach their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form and Impact */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">How Your Donation Helps</h2>
                <p className="mt-4 text-muted-foreground">
                  Your generous contribution directly supports our programs and services for physically challenged
                  children. Every donation, no matter the size, makes a meaningful impact on the lives of the children
                  we serve.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4 rounded-full bg-primary/10 p-2 w-fit">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold">Education</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Provides specialized learning materials, adaptive technology, and qualified teachers.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4 rounded-full bg-primary/10 p-2 w-fit">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold">Therapy</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Supports physical, occupational, and speech therapy services for children in need.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4 rounded-full bg-primary/10 p-2 w-fit">
                      <Utensils className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold">Nutrition</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Provides healthy meals and nutritional support for children's growth and development.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4 rounded-full bg-primary/10 p-2 w-fit">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold">Community</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Builds supportive networks for families and promotes inclusion in the wider community.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-bold">Your Impact</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <span className="text-primary text-sm font-bold">$25</span>
                    </div>
                    <p className="text-muted-foreground">Provides educational materials for one child for a month</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <span className="text-primary text-sm font-bold">$50</span>
                    </div>
                    <p className="text-muted-foreground">Sponsors one therapy session for a child in need</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <span className="text-primary text-sm font-bold">$100</span>
                    </div>
                    <p className="text-muted-foreground">Provides a week of nutritious meals for five children</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <span className="text-primary text-sm font-bold">$500</span>
                    </div>
                    <p className="text-muted-foreground">Funds adaptive equipment for our classrooms</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <span className="text-primary text-sm font-bold">$1000</span>
                    </div>
                    <p className="text-muted-foreground">Sponsors a child's education and therapy for a full year</p>
                  </li>
                </ul>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Children in a classroom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <div className="bg-muted rounded-lg p-6 md:p-8 sticky top-20">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-6">Make a Donation</h2>
                <DonationForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Partnerships */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Corporate Partnerships</h2>
            <p className="mt-4 text-muted-foreground">
              We welcome partnerships with businesses and organizations that share our commitment to supporting
              physically challenged children. Corporate donations, sponsorships, and employee volunteer programs make a
              significant impact on our work.
            </p>
            <p className="mt-4 text-muted-foreground">
              To learn more about corporate partnership opportunities, please contact us at{" "}
              <a href="mailto:partnerships@hopefoundation.org" className="text-primary underline">
                partnerships@hopefoundation.org
              </a>{" "}
              or call{" "}
              <a href="tel:+1234567890" className="text-primary underline">
                +1 (234) 567-890
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Donor Recognition */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Our Generous Supporters</h2>
            <p className="mt-4 text-muted-foreground">
              We are grateful to the following individuals, businesses, and organizations for their generous support of
              our mission.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="bg-background p-4 rounded-lg shadow-sm">
                <h3 className="font-bold">Platinum Donors</h3>
                <ul className="mt-2 text-muted-foreground">
                  <li>Smith Family Foundation</li>
                  <li>TechCorp Industries</li>
                  <li>Global Health Initiative</li>
                </ul>
              </div>
              <div className="bg-background p-4 rounded-lg shadow-sm">
                <h3 className="font-bold">Gold Donors</h3>
                <ul className="mt-2 text-muted-foreground">
                  <li>Johnson & Partners</li>
                  <li>Community Trust Bank</li>
                  <li>Dr. Emily Chen</li>
                </ul>
              </div>
              <div className="bg-background p-4 rounded-lg shadow-sm">
                <h3 className="font-bold">Silver Donors</h3>
                <ul className="mt-2 text-muted-foreground">
                  <li>Local Rotary Club</li>
                  <li>Green Valley School</li>
                  <li>And many more...</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
