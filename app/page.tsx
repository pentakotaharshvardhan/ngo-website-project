import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HandHeart, GraduationCap, Users, Trophy, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-10" />
        <div className="relative h-[70vh] w-full">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Children playing and learning together"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container">
              <div className="max-w-2xl space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Empowering Every Child to Reach Their Full Potential
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  We provide support, education, and opportunities for physically challenged children to thrive in a
                  world of possibilities.
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
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Children in a classroom setting"
                width={800}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Mission</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Creating a World Where Every Child Can Thrive
              </h2>
              <p className="text-muted-foreground">
                At Hope Foundation, we believe that every child, regardless of physical ability, deserves the
                opportunity to learn, grow, and achieve their dreams. Our mission is to provide specialized education,
                therapy, and support services to physically challenged children, helping them overcome barriers and
                build a brighter future.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <strong>Specialized Education</strong>
                    <p className="text-sm text-muted-foreground">
                      Tailored learning programs that address each child's unique needs and abilities.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <HandHeart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <strong>Therapeutic Support</strong>
                    <p className="text-sm text-muted-foreground">
                      Physical, occupational, and speech therapy to help children develop essential skills.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <strong>Community Building</strong>
                    <p className="text-sm text-muted-foreground">
                      Creating a supportive network of families, educators, and volunteers.
                    </p>
                  </div>
                </li>
              </ul>
              <Button asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Impact</h2>
            <p className="mt-4 text-muted-foreground">
              Together, we're making a difference in the lives of physically challenged children.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">500+</div>
              <p className="mt-2 text-sm text-muted-foreground">Children Supported</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">50+</div>
              <p className="mt-2 text-sm text-muted-foreground">Dedicated Teachers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">200+</div>
              <p className="mt-2 text-sm text-muted-foreground">Active Volunteers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">15</div>
              <p className="mt-2 text-sm text-muted-foreground">Years of Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Programs</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We offer a range of programs designed to support the educational, physical, and emotional development of
              children with physical challenges.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-2 w-fit">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Adaptive Education</h3>
                <p className="mt-2 text-muted-foreground">
                  Personalized learning programs that adapt to each child's unique abilities and learning style.
                </p>
                <Button variant="link" className="mt-4 p-0" asChild>
                  <Link href="/programs" className="flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-2 w-fit">
                  <HandHeart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Therapy Services</h3>
                <p className="mt-2 text-muted-foreground">
                  Comprehensive therapy programs including physical, occupational, and speech therapy.
                </p>
                <Button variant="link" className="mt-4 p-0" asChild>
                  <Link href="/programs" className="flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-2 w-fit">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Recreational Activities</h3>
                <p className="mt-2 text-muted-foreground">
                  Adaptive sports, arts, and social activities that promote inclusion and build confidence.
                </p>
                <Button variant="link" className="mt-4 p-0" asChild>
                  <Link href="/programs" className="flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Recent Achievements</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl">
                Celebrating the accomplishments of our children and organization.
              </p>
            </div>
            <Button className="mt-4 md:mt-0" asChild>
              <Link href="/achievements">View All Achievements</Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Achievement 1"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">June 2023</div>
                <h3 className="text-xl font-bold">National Art Competition Winners</h3>
                <p className="mt-2 text-muted-foreground">
                  Our students won first place in the National Inclusive Art Competition, showcasing their creativity
                  and talent.
                </p>
              </CardContent>
            </Card>
            <Card>
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Achievement 2"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">September 2023</div>
                <h3 className="text-xl font-bold">New Therapy Center Opening</h3>
                <p className="mt-2 text-muted-foreground">
                  We opened our state-of-the-art therapy center, expanding our capacity to serve more children in need.
                </p>
              </CardContent>
            </Card>
            <Card>
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Achievement 3"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">December 2023</div>
                <h3 className="text-xl font-bold">Community Partnership Award</h3>
                <p className="mt-2 text-muted-foreground">
                  Recognized for our outstanding community engagement and partnerships with local businesses and
                  organizations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="rounded-lg bg-primary/10 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Us in Making a Difference</h2>
                <p className="text-muted-foreground">
                  Whether through volunteering, donating, or spreading awareness, your support helps us create a more
                  inclusive world for physically challenged children.
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
