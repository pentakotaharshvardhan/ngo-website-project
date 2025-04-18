import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { supabase } from "@/lib/supabase"
import type { Achievement } from "@/lib/supabase"

export const metadata: Metadata = {
  title: "Achievements - Hope Foundation",
  description: "Celebrating the accomplishments and milestones of our children and organization.",
}

async function getAchievements() {
  try {
    // Try to fetch achievements from Supabase
    const { data, error } = await supabase.from("achievements").select("*").order("date", { ascending: false })

    // If there's an error or no data, we'll use sample achievements instead
    if (error || !data || data.length === 0) {
      console.log("Using sample achievements instead of database data")
      return [] // Return empty array to trigger sample data
    }

    return data as Achievement[]
  } catch (error) {
    console.error("Error fetching achievements:", error)
    return [] // Return empty array to trigger sample data
  }
}

export default async function AchievementsPage() {
  const achievements = await getAchievements()

  // Group achievements by year
  const achievementsByYear: Record<string, Achievement[]> = {}

  // If no achievements from database, use these sample achievements
  const sampleAchievements = [
    {
      id: "1",
      created_at: "2023-06-15",
      title: "National Art Competition Winners",
      description:
        "Our students won first place in the National Inclusive Art Competition, showcasing their creativity and talent. The competition featured over 500 entries from across the country, and our students' collaborative art piece titled 'A World Without Barriers' captured the judges' hearts with its powerful message and vibrant execution.",
      date: "2023-06-10",
      image_url: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "2",
      created_at: "2023-09-20",
      title: "New Therapy Center Opening",
      description:
        "We opened our state-of-the-art therapy center, expanding our capacity to serve more children in need. The new center features specialized equipment for physical, occupational, and speech therapy, as well as sensory rooms and adaptive technology. This expansion will allow us to provide services to an additional 100 children annually.",
      date: "2023-09-15",
      image_url: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "3",
      created_at: "2023-12-10",
      title: "Community Partnership Award",
      description:
        "Recognized for our outstanding community engagement and partnerships with local businesses and organizations. This award acknowledges our collaborative efforts to create inclusive opportunities for physically challenged children and raise awareness about accessibility issues in our community.",
      date: "2023-12-05",
      image_url: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "4",
      created_at: "2022-05-25",
      title: "Inclusive Sports Day Success",
      description:
        "Our annual Inclusive Sports Day brought together over 200 participants from across the region for a day of adaptive sports and activities. The event featured wheelchair basketball, sitting volleyball, and other inclusive games that allowed children of all abilities to participate and compete together.",
      date: "2022-05-20",
      image_url: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "5",
      created_at: "2022-11-15",
      title: "Educational Innovation Grant",
      description:
        "Received a major grant to implement innovative educational technologies in our classrooms. This funding will support the purchase of adaptive learning devices, specialized software, and training for our teachers to better serve students with diverse physical needs and learning styles.",
      date: "2022-11-10",
      image_url: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "6",
      created_at: "2021-08-12",
      title: "Student Graduation Milestone",
      description:
        "Celebrated the graduation of our largest class yet, with 15 students moving on to mainstream schools or vocational training programs. This achievement highlights the effectiveness of our educational approach and the dedication of our students, teachers, and support staff.",
      date: "2021-08-05",
      image_url: "/placeholder.svg?height=400&width=600",
    },
  ]

  const allAchievements = achievements.length > 0 ? achievements : sampleAchievements

  allAchievements.forEach((achievement) => {
    const year = new Date(achievement.date).getFullYear().toString()
    if (!achievementsByYear[year]) {
      achievementsByYear[year] = []
    }
    achievementsByYear[year].push(achievement)
  })

  // Sort years in descending order
  const years = Object.keys(achievementsByYear).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Achievements</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Celebrating the accomplishments of our children and organization as we work towards a more inclusive
              world.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-12 md:py-16">
        <div className="container">
          <Tabs defaultValue={years[0] || "2023"} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                {years.map((year) => (
                  <TabsTrigger key={year} value={year}>
                    {year}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {years.map((year) => (
              <TabsContent key={year} value={year} className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {achievementsByYear[year].map((achievement) => (
                    <Card key={achievement.id} className="overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src={achievement.image_url || "/placeholder.svg?height=300&width=500"}
                          alt={achievement.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="text-sm text-muted-foreground mb-2">
                          {new Date(achievement.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                        <h3 className="text-xl font-bold">{achievement.title}</h3>
                        <p className="mt-2 text-muted-foreground">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Major Milestones */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8 text-center">Major Milestones</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

            <div className="space-y-12">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 rounded-full bg-primary"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-8">
                    <h3 className="text-xl font-bold">2008</h3>
                    <p className="text-muted-foreground">
                      Hope Foundation was established with a mission to support physically challenged children
                    </p>
                  </div>
                  <div className="md:pl-8">
                    <div className="relative h-40 w-full rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Foundation established"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 rounded-full bg-primary"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-8 md:order-1 order-2">
                    <div className="relative h-40 w-full rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="First center opened"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:pl-8 md:order-2 order-1">
                    <h3 className="text-xl font-bold">2012</h3>
                    <p className="text-muted-foreground">Opened our first dedicated education and therapy center</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 rounded-full bg-primary"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-8">
                    <h3 className="text-xl font-bold">2018</h3>
                    <p className="text-muted-foreground">
                      Celebrated 10 years of service and reached the milestone of supporting 1,000 children
                    </p>
                  </div>
                  <div className="md:pl-8">
                    <div className="relative h-40 w-full rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="10 year celebration"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 rounded-full bg-primary"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-8 md:order-1 order-2">
                    <div className="relative h-40 w-full rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Expansion to new locations"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:pl-8 md:order-2 order-1">
                    <h3 className="text-xl font-bold">2023</h3>
                    <p className="text-muted-foreground">
                      Expanded to three locations and launched our digital learning platform
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8 text-center">Student Success Stories</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="flex flex-col md:flex-row overflow-hidden">
              <div className="relative h-48 md:h-auto md:w-1/3">
                <Image src="/placeholder.svg?height=300&width=200" alt="Student 1" fill className="object-cover" />
              </div>
              <CardContent className="p-6 md:w-2/3">
                <h3 className="text-xl font-bold">Maya's Journey</h3>
                <p className="text-sm text-muted-foreground mb-4">From student to advocate</p>
                <p className="text-muted-foreground">
                  Maya joined Hope Foundation at age 7 with limited mobility due to cerebral palsy. Through personalized
                  education and therapy, she developed strong academic skills and confidence. Now 18, she's attending
                  university on a scholarship and advocates for disability rights.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col md:flex-row overflow-hidden">
              <div className="relative h-48 md:h-auto md:w-1/3">
                <Image src="/placeholder.svg?height=300&width=200" alt="Student 2" fill className="object-cover" />
              </div>
              <CardContent className="p-6 md:w-2/3">
                <h3 className="text-xl font-bold">Aiden's Story</h3>
                <p className="text-sm text-muted-foreground mb-4">Finding his voice</p>
                <p className="text-muted-foreground">
                  When Aiden came to us at age 5, he had physical challenges that affected his speech. Through our
                  speech therapy program and assistive technology, he found his voice. Today, he's a confident
                  12-year-old who excels in school and loves public speaking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
