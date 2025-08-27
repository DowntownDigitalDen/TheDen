import Link from "next/link"
import {
  ArrowRight,
  ArrowUp,
  Code,
  ExternalLink,
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Cpu,
  Zap,
  Camera,
  Printer,
  Settings,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Code className="h-5 w-5" />
            <span>Downtown Digital Den</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#work" className="text-sm font-medium transition-colors hover:text-primary">
              Our Work
            </Link>
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </Link>
            <Link href="#team" className="text-sm font-medium transition-colors hover:text-primary">
              Team
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href="/payment">Make a Payment</Link>
            </Button>
            <Button>Get a Quote</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60 z-10"></div>
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/subtle-city-tech-background.png"
              alt="City Tech Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container px-4 md:px-6 relative z-20">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Downtown Digital Den
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl">
                  Advanced Technology Solutions & Digital Fabrication
                </p>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
                  From AI-powered automations to precision CNC milling, we bring cutting-edge technology solutions to
                  life.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="work" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Work</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our portfolio of software solutions, AI automations, digital fabrication, and immersive
                  experiences.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="p-4">
                  <CardTitle>AI Workflow Automation</CardTitle>
                  <CardDescription>Intelligent document processing system</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="h-[200px] w-full overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/ai-automation-dashboard.png"
                      alt="AI Automation Dashboard"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardContent>
                <CardFooter className="p-4">
                  <Button className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="p-4">
                  <CardTitle>VR Training Module</CardTitle>
                  <CardDescription>Immersive safety training for manufacturing</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="h-[200px] w-full overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/vr-training-environment.png"
                      alt="VR Training Environment"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardContent>
                <CardFooter className="p-4">
                  <Button className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="p-4">
                  <CardTitle>Custom CNC Parts</CardTitle>
                  <CardDescription>Precision-machined aluminum components</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="h-[200px] w-full overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/cnc-machined-parts.png"
                      alt="CNC Machined Parts"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardContent>
                <CardFooter className="p-4">
                  <Button className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="p-4">
                  <CardTitle>Drone Real Estate Tour</CardTitle>
                  <CardDescription>4K aerial cinematography showcase</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="h-[200px] w-full overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/drone-real-estate-aerial.png"
                      alt="Drone Real Estate Photography"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardContent>
                <CardFooter className="p-4">
                  <Button className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="p-4">
                  <CardTitle>Custom 3D Prototypes</CardTitle>
                  <CardDescription>Rapid prototyping for product development</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="h-[200px] w-full overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/3d-printed-prototypes.png"
                      alt="3D Printed Prototypes"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardContent>
                <CardFooter className="p-4">
                  <Button className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="p-4">
                  <CardTitle>Laser Engraved Awards</CardTitle>
                  <CardDescription>Precision engraving on wood and metal</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="h-[200px] w-full overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/laser-engraved-awards.png"
                      alt="Laser Engraved Awards"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardContent>
                <CardFooter className="p-4">
                  <Button className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive technology solutions from software development to precision manufacturing.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Software Development</h3>
                <p className="mt-2 text-muted-foreground">
                  Custom software solutions built with modern technologies like TypeScript, React, and PostgreSQL.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Cpu className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI Automations</h3>
                <p className="mt-2 text-muted-foreground">
                  Intelligent agentic workflows that automate complex business processes and decision-making.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">VR Tutorial Creation</h3>
                <p className="mt-2 text-muted-foreground">
                  Immersive virtual reality training modules and educational experiences for various industries.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Drone Photography</h3>
                <p className="mt-2 text-muted-foreground">
                  Professional aerial photography and videography for real estate, events, and marketing.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Printer className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">3D Printing</h3>
                <p className="mt-2 text-muted-foreground">
                  Rapid prototyping and custom manufacturing using advanced 3D printing technologies.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Laser Engraving</h3>
                <p className="mt-2 text-muted-foreground">
                  Precision laser engraving on wood, metal, acrylic, and other materials for custom products.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">CNC Milling</h3>
                <p className="mt-2 text-muted-foreground">
                  High-precision CNC machining for custom parts, prototypes, and small-batch manufacturing.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Integration Services</h3>
                <p className="mt-2 text-muted-foreground">
                  Seamless integration of digital and physical solutions to optimize your workflow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stripe Payment Integration Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Secure Payments with Stripe</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer convenient and secure payment options for all our services.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Easy Payment Options</h3>
                  <p className="text-muted-foreground">
                    We've integrated Stripe to provide you with a seamless and secure payment experience. Pay for your
                    technology solutions, place a deposit, or set up recurring payments with ease.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 mr-2 text-primary"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      <span>Bank-level security for all transactions</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 mr-2 text-primary"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                      <span>Pay for one-time services or recurring maintenance</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 mr-2 text-primary"
                      >
                        <path d="M12 2v20" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                      <span>Transparent pricing with no hidden fees</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 mr-2 text-primary"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <line x1="2" x2="22" y1="10" y2="10" />
                      </svg>
                      <span>Support for all major credit cards</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button asChild size="lg">
                      <Link href="/payment">
                        Make a Payment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative h-[350px] w-full max-w-[350px]">
                    <div className="absolute -top-6 -left-6 h-[350px] w-[350px] rounded-lg bg-primary/10"></div>
                    <div className="absolute -bottom-6 -right-6 h-[350px] w-[350px] rounded-lg bg-primary/5"></div>
                    <div className="relative h-[350px] w-[350px] overflow-hidden rounded-lg bg-background shadow-xl">
                      <img
                        src="/secure-payment-processing-with-credit-card.png"
                        alt="Secure Payment Processing"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Service Packages</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the perfect package for your technology and fabrication needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              {/* Digital Services Package */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Digital Services</CardTitle>
                  <CardDescription>Software & AI Solutions</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-2xl font-bold">$500 - $2,000</div>
                  <p className="text-sm text-muted-foreground mt-1">Based on complexity and scope</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Custom software development</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">AI automation workflows</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Database integration</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Up to 3 revisions</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/payment?package=digital">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Creative & Media Package */}
              <Card className="flex flex-col border-primary">
                <CardHeader className="bg-primary/10">
                  <CardTitle>Creative & Media</CardTitle>
                  <CardDescription>VR & Drone Services</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-2xl font-bold">$300 - $1,500</div>
                  <p className="text-sm text-muted-foreground mt-1">Based on project duration and complexity</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">VR tutorial creation</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">4K drone photography/video</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Post-production editing</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Multiple format delivery</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/payment?package=creative">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Fabrication Package */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Digital Fabrication</CardTitle>
                  <CardDescription>3D Printing, CNC & Engraving</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-2xl font-bold">$50 - $500+</div>
                  <p className="text-sm text-muted-foreground mt-1">Based on materials and complexity</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">3D printing & prototyping</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">CNC milling & machining</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Laser engraving services</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Material consultation</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/payment?package=fabrication">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the talented professionals behind Downtown Digital Den's innovative solutions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="text-center">
                <CardHeader className="pb-2">
                  <div className="flex justify-center">
                    <div className="h-24 w-24 overflow-hidden rounded-full">
                      <img src="/professional-male-headshot.png" alt="Team Member" className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <CardTitle className="mt-4">Chandler Smith</CardTitle>
                  <CardDescription>Founder & Lead Developer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Full-stack developer and AI specialist with expertise in TypeScript, React, and intelligent
                    automation systems.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader className="pb-2">
                  <div className="flex justify-center">
                    <div className="h-24 w-24 overflow-hidden rounded-full">
                      <img src="/professional-headshot-female.png" alt="Team Member" className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <CardTitle className="mt-4">Sarah Johnson</CardTitle>
                  <CardDescription>VR Experience Designer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Creative designer specializing in immersive VR experiences and user interface design for virtual
                    environments.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader className="pb-2">
                  <div className="flex justify-center">
                    <div className="h-24 w-24 overflow-hidden rounded-full">
                      <img src="/professional-male-glasses-headshot.png" alt="Team Member" className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <CardTitle className="mt-4">Michael Lee</CardTitle>
                  <CardDescription>Fabrication Specialist</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Expert in digital fabrication, CNC machining, 3D printing, and drone photography with precision
                    engineering background.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to start your next technology project? Contact us today for a free consultation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p>12 Main St S, Minot, North Dakota</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <p>chandler@downtowndigitalden.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <p>(701) 555-1234</p>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <h3 className="text-xl font-bold">Follow Us</h3>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                    <Button variant="outline" size="icon">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                    <Button variant="outline" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="project-type"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Project Type
                    </label>
                    <Select>
                      <SelectTrigger id="project-type">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="software">Software Development</SelectItem>
                        <SelectItem value="ai-automation">AI Automation</SelectItem>
                        <SelectItem value="vr-tutorial">VR Tutorial Creation</SelectItem>
                        <SelectItem value="drone">Drone Photography/Videography</SelectItem>
                        <SelectItem value="3d-printing">3D Printing</SelectItem>
                        <SelectItem value="engraving">Laser Engraving</SelectItem>
                        <SelectItem value="cnc">CNC Milling</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 bg-muted/40">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 font-bold">
            <Code className="h-5 w-5" />
            <span>Downtown Digital Den</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Downtown Digital Den. All rights reserved.
          </p>
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <nav className="flex gap-4">
              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                Terms
              </Link>
              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                Privacy
              </Link>
            </nav>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" className="ml-2">
                <ArrowUp className="h-4 w-4" />
                <span className="sr-only">Back to top</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
