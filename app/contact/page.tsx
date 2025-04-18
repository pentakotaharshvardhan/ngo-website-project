import type { Metadata } from "next"
import Image from "next/image"
import ContactForm from "./contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Hope Foundation",
  description:
    "Get in touch with Hope Foundation. We're here to answer your questions and provide information about our programs and services.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              We're here to answer your questions and provide information about our programs and services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Get in Touch</h2>
                <p className="mt-4 text-muted-foreground">
                  Whether you have questions about our programs, want to volunteer, or are interested in supporting our
                  work, we'd love to hear from you. Fill out the form or use the contact information below to reach us.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4 rounded-full bg-primary/10 p-2 w-fit">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold">Email</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      <a href="mailto:info@hopefoundation.org" className="hover:text-primary">
                        info@hopefoundation.org
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      <a href="mailto:volunteer@hopefoundation.org" className="hover:text-primary">
                        volunteer@hopefoundation.org
                      </a>
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4 rounded-full bg-primary/10 p-2 w-fit">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      <a href="tel:+1234567890" className="hover:text-primary">
                        +1 (234) 567-890
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">Monday to Friday, 9am - 5pm</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4 rounded-full bg-primary/10 p-2 w-fit">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold">Address</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      123 Hope Street
                      <br />
                      City, State 12345
                      <br />
                      Country
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4 rounded-full bg-primary/10 p-2 w-fit">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold">Hours</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Monday - Friday: 8am - 6pm
                      <br />
                      Saturday: 9am - 1pm
                      <br />
                      Sunday: Closed
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=800" alt="Map location" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-background/90 p-4 rounded-lg">
                    <p className="text-sm font-medium">Interactive map will be displayed here</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-muted rounded-lg p-6 md:p-8 sticky top-20">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-bold">How can I enroll my child in your programs?</h3>
                <p className="mt-2 text-muted-foreground">
                  To enroll your child, please contact our admissions office at admissions@hopefoundation.org or call +1
                  (234) 567-890. We'll guide you through the enrollment process, which includes an initial assessment to
                  determine the most appropriate programs and services for your child.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-bold">What age groups do you serve?</h3>
                <p className="mt-2 text-muted-foreground">
                  Our programs serve children from ages 3 to 18. We offer early intervention services for younger
                  children and transition support for teenagers preparing for adulthood.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-bold">Do you offer financial assistance?</h3>
                <p className="mt-2 text-muted-foreground">
                  Yes, we offer scholarships and sliding-scale fees based on financial need. We believe that every child
                  deserves access to our services, regardless of their family's financial situation. Please contact our
                  finance office for more information.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-bold">What qualifications do your staff members have?</h3>
                <p className="mt-2 text-muted-foreground">
                  Our team includes certified special education teachers, licensed physical therapists, occupational
                  therapists, speech therapists, and counselors. All staff members undergo rigorous background checks
                  and receive ongoing professional development to ensure they provide the highest quality care and
                  education.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-bold">Can I tour your facility before enrolling my child?</h3>
                <p className="mt-2 text-muted-foreground">
                  We encourage families to visit our center and see our programs in action. Please contact us to
                  schedule a tour, and we'll be happy to show you around and answer any questions you may have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
