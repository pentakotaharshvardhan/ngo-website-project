"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

const donationFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  amount: z.string().refine(
    (val) => {
      const num = Number.parseFloat(val)
      return !isNaN(num) && num > 0
    },
    {
      message: "Please enter a valid donation amount.",
    },
  ),
  donationType: z.enum(["one-time", "monthly", "annually"], {
    required_error: "Please select a donation type.",
  }),
  message: z.string().optional(),
  anonymous: z.boolean().default(false),
  agreeTerms: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms and conditions.",
  }),
})

type DonationFormValues = z.infer<typeof donationFormSchema>

export default function DonationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      amount: "",
      donationType: "one-time",
      message: "",
      anonymous: false,
      agreeTerms: false,
    },
  })

  async function onSubmit(data: DonationFormValues) {
    setIsSubmitting(true)
    try {
      // In a real application, you would integrate with a payment processor here
      // For this demo, we'll simulate a successful donation without database insertion

      // Uncomment this code once the Supabase table is set up
      /*
      const { error } = await supabase.from("donations").insert([
        {
          name: data.name,
          email: data.email,
          amount: Number.parseFloat(data.amount),
          donation_type: data.donationType,
          message: data.message || null,
          anonymous: data.anonymous,
        },
      ])

      if (error) throw error
      */

      // For now, just simulate success without database insertion
      console.log("Donation data:", {
        name: data.name,
        email: data.email,
        amount: Number.parseFloat(data.amount),
        donation_type: data.donationType,
        message: data.message || null,
        anonymous: data.anonymous,
      })

      setIsSuccess(true)
      toast({
        title: "Thank you for your donation!",
        description: "Your generosity helps us make a difference in the lives of physically challenged children.",
      })
      form.reset()
    } catch (error) {
      console.error("Error processing donation:", error)
      toast({
        title: "Something went wrong",
        description: "Your donation couldn't be processed. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2 mb-4">
          <Heart className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold">Thank You for Your Donation!</h3>
        <p className="mt-2 text-muted-foreground">
          Your generosity helps us continue our mission to support physically challenged children.
        </p>
        <Button className="mt-6" onClick={() => setIsSuccess(false)}>
          Make Another Donation
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john.doe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Donation Amount ($)</FormLabel>
              <FormControl>
                <Input type="number" min="1" step="any" placeholder="50" {...field} />
              </FormControl>
              <FormDescription>Choose any amount you wish to donate</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="donationType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Donation Frequency</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="one-time" />
                    </FormControl>
                    <FormLabel className="font-normal">One-time donation</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="monthly" />
                    </FormControl>
                    <FormLabel className="font-normal">Monthly donation</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="annually" />
                    </FormControl>
                    <FormLabel className="font-normal">Annual donation</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share why you're donating or any special instructions"
                  className="min-h-[80px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="anonymous"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Make my donation anonymous</FormLabel>
                <FormDescription>Your name will not be displayed in our donor list</FormDescription>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="agreeTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>I agree to the terms and conditions</FormLabel>
                <FormDescription>
                  By submitting this form, you agree to our{" "}
                  <a href="/terms" className="text-primary underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-primary underline">
                    Privacy Policy
                  </a>
                  .
                </FormDescription>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Donate Now"
          )}
        </Button>
      </form>
    </Form>
  )
}

import { Heart } from "lucide-react"
