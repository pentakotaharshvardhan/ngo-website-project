import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, GraduationCap, HandHeart, Trophy, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Hope Foundation",
  description:
    "Learn about Hope Foundation's mission, vision, and the team dedicated to empowering physically challenged children.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Hope Foundation</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Dedicated to empowering physically challenged children through education, therapy, and community support.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Children and staff at Hope Foundation"
                width={800}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
              <p className="text-muted-foreground">
                Hope Foundation was established in 2008 by Dr. Sarah Johnson, a pediatric physical therapist who
                recognized the need for specialized education and support services for physically challenged children in
                our community.
              </p>
              <p className="text-muted-foreground">
                What began as a small therapy center with just five children has grown into a comprehensive organization
                serving hundreds of children annually through our education programs, therapy services, and community
                initiatives.
              </p>
              <p className="text-muted-foreground">
                Over the years, we have expanded our facilities, developed innovative programs, and built a dedicated
                team of educators, therapists, and support staff who share our commitment to creating a world where
                every child, regardless of physical ability, has the opportunity to learn, grow, and thrive.
              </p>
              <p className="text-muted-foreground">
                Today, Hope Foundation stands as a beacon of hope and possibility, demonstrating what can be achieved
                when we believe in the potential of every child and work together to remove barriers to their success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="mb-4 rounded-full bg-primary/10 p-2 w-fit">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  To provide specialized education, therapy, and support services that empower physically challenged
                  children to overcome barriers, develop their abilities, and achieve their full potential in a
                  nurturing and inclusive environment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="mb-4 rounded-full bg-primary/10 p-2 w-fit">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground">
                  A world where physical challenges do not limit a child's access to quality education, personal growth,
                  and community participation—where every child is valued, included, and empowered to pursue their
                  dreams.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              These core principles guide our work and shape our approach to supporting physically challenged children
              and their families.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-2 w-fit">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Inclusion</h3>
                <p className="mt-2 text-muted-foreground">
                  We believe in creating environments where every child feels welcomed, valued, and included, regardless
                  of their physical abilities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-2 w-fit">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Excellence</h3>
                <p className="mt-2 text-muted-foreground">
                  We are committed to providing the highest quality education and therapy services, continuously
                  improving our programs to meet the evolving needs of our children.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-2 w-fit">
                  <HandHeart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Compassion</h3>
                <p className="mt-2 text-muted-foreground">
                  We approach our work with empathy, understanding, and respect for the unique challenges and strengths
                  of each child and family we serve.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-2 w-fit">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Empowerment</h3>
                <p className="mt-2 text-muted-foreground">
                  We focus on developing children's abilities, confidence, and independence, equipping them with the
                  skills and mindset to advocate for themselves.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-2 w-fit">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="mt-2 text-muted-foreground">
                  We work closely with families, schools, healthcare providers, and community partners to create
                  comprehensive support systems for our children.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-2 w-fit">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="mt-2 text-muted-foreground">
                  We embrace creative solutions, adaptive technologies, and evidence-based practices to overcome
                  barriers and enhance learning opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Team</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated professionals who make our work possible.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Dr. Sarah Johnson"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold">Dr. Sarah Johnson</h3>
              <p className="text-sm text-muted-foreground">Founder & Executive Director</p>
            </div>
            <div className="text-center">
              <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=160&width=160" alt="Michael Chen" fill className="object-cover" />
              </div>
              <h3 className="font-bold">Michael Chen</h3>
              <p className="text-sm text-muted-foreground">Education Director</p>
            </div>
            <div className="text-center">
              <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Dr. Amara Patel"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold">Dr. Amara Patel</h3>
              <p className="text-sm text-muted-foreground">Head of Therapy Services</p>
            </div>
            <div className="text-center">
              <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=160&width=160" alt="James Wilson" fill className="object-cover" />
              </div>
              <h3 className="font-bold">James Wilson</h3>
              <p className="text-sm text-muted-foreground">Community Outreach Director</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Our team includes 50+ dedicated professionals, including special education teachers, physical therapists,
              occupational therapists, speech therapists, counselors, and administrative staff.
            </p>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Board of Directors</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our board members bring diverse expertise and a shared commitment to our mission.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Robert Thompson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Robert Thompson</h3>
                    <p className="text-sm text-muted-foreground">Board Chair</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  CEO of Thompson Industries and parent of a Hope Foundation graduate.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Dr. Elena Rodriguez"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Dr. Elena Rodriguez</h3>
                    <p className="text-sm text-muted-foreground">Vice Chair</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Pediatric Neurologist with 20+ years of experience in children's healthcare.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=64&width=64" alt="David Nguyen" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold">David Nguyen</h3>
                    <p className="text-sm text-muted-foreground">Treasurer</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Financial advisor with expertise in nonprofit management and sustainability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners and Supporters */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Partners & Supporters</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We are grateful for the organizations and institutions that support our work.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex items-center justify-center p-4">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Partner Logo 1"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Partner Logo 2"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Partner Logo 3"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Partner Logo 4"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Partner Logo 5"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Partner Logo 6"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Partner Logo 7"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Partner Logo 8"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="rounded-lg bg-primary/10 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Us in Our Mission</h2>
                <p className="text-muted-foreground">
                  There are many ways to get involved with Hope Foundation and support our work with physically
                  challenged children. Whether through volunteering, donating, or spreading awareness, your contribution
                  makes a difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button size="lg" asChild>
                    <Link href="/donate">Donate Now</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/volunteer">Become a Volunteer</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 md:h-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Children and volunteers"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
