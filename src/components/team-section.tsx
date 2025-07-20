import Image from '@/components/ui/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, Mail, Phone, Instagram } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const teamData = {
  "2024-25": {
    leaders: [
      {
        name: "Pushpender",
        role: "Leader",
        description: "A visionary leader with a focus on blending aesthetics with functionality.",
        avatar: "/pushpender.webp",
        aiHint: "indian man portrait",
        socials: { linkedin: "https://www.linkedin.com/in/pushpender-371176287/", mail: "mailto:pushpender23@iitk.ac.in", instagram: "https://www.instagram.com/pushpender.9257/", phone: "tel:+919257009192" }
      },
      {
        name: "Vikash Sunda",
        role: "Leader",
        description: "A visionary leader with a focus on blending aesthetics with functionality.",
        avatar: "/vikash.jpg",
        aiHint: "indian man portrait",
        socials: { linkedin: "https://www.linkedin.com/in/vikash-sunda-34245a2b4/", mail: "mailto:vikashs23@iitk.ac.in", instagram: "https://www.instagram.com/vikash_sunda__06?igsh=ODJyYmQxbTZ0YnJ5", phone: "tel:+916376327908" }
      }
    ],
    secretaries: [
      { name: "Y Krishna Poojitha", role: "Secretary", avatar: "/poojitha.jpg", aiHint: "indian woman portrait", description: "Not perfect, just original", socials: { linkedin: "#", mail: "mailto:ykrishnap24@iitk.ac.in", instagram: "https://www.instagram.com/ykpoojitha_1306", phone: "tel:+918074292557" } },
      { name: "Himanshu Kumar", role: "Secretary", avatar: "/himanshu.jpg", aiHint: "indian man portrait", description: "Hi! I’m Himanshu Kumar, a student of Civil Engineering at IIT Kanpur. I'm someone who thrives on curiosity and creativity — whether it’s through solving complex problems, exploring the world of design, or simply expressing myself through art.  I’m deeply passionate about anime, digital design, and the ever-evolving field of technology. Outside the classroom, you'll often find me drawing, building cool projects, or diving into new things to learn. I believe in lifelong growth and enjoy working on ideas that challenge my thinking and expand my skill set.  Originally from Prayagraj, Uttar Pradesh, I carry with me the values of resilience, open-mindedness, and a desire to contribute meaningfully to everything I do.", socials: { linkedin: "https://www.linkedin.com/in/himanshumini?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", mail: "mailto:krhimanshu24@iitk.ac.in", instagram: "https://www.instagram.com/himanshu_iitk?igsh=dm95eWFnczcxZHR6", phone: "tel:+919935186164" } },
      { name: "Harsh Gautam", role: "Secretary", avatar: "/harsh.jpg", aiHint: "indian man portrait", description: "I may be a bit lazy in doing work but when I do it then you will have no complaints.", socials: { linkedin: "https://www.linkedin.com/in/harsh-gautam-1a4b31279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", mail: "mailto:hgautam24@iitk.ac.in", instagram: "https://www.instagram.com/harshgautam2912?igsh=MTV2ZGh4N3p6Mm9lMg==", phone: "tel:+919520229165" } },
      { name: "Harshit Karnani", role: "Secretary", avatar: "/harshit.jpeg", aiHint: "indian man portrait", description: "I'm from Bangalore. My branch is MSE. I enjoy designing - whether it's basic poster making or 3D object modelling. I also love playing sports.", socials: { linkedin: "https://www.linkedin.com/in/harshit-karnani-555306372/", mail: "mailto:kharshit24@iitk.ac.in", instagram: "https://www.instagram.com/_h4rsh.t/", phone: "tel:+919448390641" } },
      { name: "Shaily", role: "Secretary", avatar: "/shaily.png", aiHint: "indian woman portrait", description: "My name is Shaily, and I’m from Shivpuri, Madhya Pradesh. I’m currently pursuing a degree in Electrical Engineering.Apart from academics, I’m passionate about playing chess.it helps me think strategically and stay focused. I also enjoy listening to music, which keeps me relaxed and inspired", socials: { linkedin: "https://www.linkedin.com/in/shaily-jatav-6b1814370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", mail: "mailto:shaily24@iitk.ac.in", instagram: "https://www.instagram.com/shaily38412?igsh=bWJxeW8wNjh0Mng1", phone: "tel:+919109128261" } },
      { name: "Anshika Singh", role: "Secretary", avatar: "/anishika.jpg", aiHint: "indian woman portrait", description: "My name is Anshika Singh. I'm from Kanpur. My branch is CSE and My hobbies are like sleeping, listening to songs and traveling too.", socials: { linkedin: "https://in.linkedin.com/in/anshika-singh-880831346", mail: "mailto:anshikas24@iitk.ac.in", instagram: "https://www.instagram.com/anshikas0802?igsh=MWducHpzaGVoOWZ2Yw==", phone: "tel:+919305295439" } },
      { name: "PAMPANA SASHANK", role: "Secretary", avatar: "/sashank.jpg", aiHint: "indian man portrait", description: "I do poster designing, have skills on autoCAD and blender and know web development", socials: { linkedin: "#", mail: "mailto:sashankp24@iitk.ac.in", instagram: "https://www.instagram.com/sashankp_06?igsh=MTVyMGRrcTZtd3hudw==", phone: "tel:+919391862995" } },
      { name: "Rudresh kumar", role: "Secretary", avatar: "/rudresh.jpg", aiHint: "indian man portrait", description: "Hi, I'm Rudresh , currently pursuing a B.S. in Chemistry at IIT Kanpur. I'm deeply interested in physics, math, and emerging technologies like AI and GenAI. Outside academics, I enjoy rap music, video editing, beat-making, and leading creative projects", socials: { linkedin: "https://www.linkedin.com/in/rudresh-thakur-49940a320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", mail: "mailto:rudresh24@iitk.ac.in", instagram: "https://www.instagram.com/rudrreshthakur?igsh=emQxZ3E5bjBremkx", phone: "tel:+919369699470" } },
      { name: "Anand", role: "Secretary", avatar: "/anand.jpg", aiHint: "indian man portrait", description: "I am person who loves ground work ,I am little bit lazy but if work is of my interest I do my best .", socials: { linkedin: "https://www.linkedin.com/in/anand-bugalia-54b50a368?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhGiGDEEqR5CGoFKdpI5ceQ%3D%3D", mail: "mailto:anandk24@iitk.ac.in", instagram: "https://www.instagram.com/anand_bugalia17/profilecard/?igsh=bjYyNjM2NXNvODF5", phone: "tel:+919024729137" } },
      { name: "AZAD BHARTI AHIRWAR", role: "Secretary", avatar: "/azad.jpg", aiHint: "indian man portrait", description: "I am a B.Tech student specializing in Mechanical Engineering, currently pursuing my degree at IIT Kanpur . I come from Chhatarpur, Madhya Pradesh, and currently reside in Hall 12 on campus. Apart from academics, I have a strong passion for outdoor sports such as football, hockey, and cricket. I also enjoy watching science fiction movies", socials: { linkedin: "https://www.linkedin.com/in/azad-bharti-8b5b86333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", mail: "mailto:azadb24@iitk.ac.in", instagram: "https://www.instagram.com/____aazad__?igsh=MmswOGhsbjdnN2Fk", phone: "tel:+918435961744" } },
      { name: "Shubham", role: "Secretary", avatar: "/shubham.jpg", aiHint: "indian man portrait", description: "Just a chill guy..", socials: { linkedin: "https://www.linkedin.com/in/shubham-yadav-39665b341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", mail: "mailto:shubham24@iitk.ac.in", instagram: "https://www.instagram.com/ham_shubh_?igsh=dXp4dW5sZDloZnp3", phone: "tel:+919034476944" } },
      { name: "Krish Agrawal", role: "Secretary", avatar: "/krish.jpg", aiHint: "indian man portrait", description: "I love to watch and play cricket and also i like playing tabble tennis carrom and listening songs", socials: { linkedin: "https://www.linkedin.com/in/krish-agrawal-519228347", mail: "mailto:akrish24@iitk.ac.in", instagram: "https://www.instagram.com/krishagrawal964?igsh=MWVweGYyZzhtZG9mMQ==", phone: "tel:+918319698794" } },
      { name: "Krishna Yadav", role: "Secretary", avatar: "/krishna.jpg", aiHint: "indian man portrait", description: "Always up for trying new things — whether it's a weird snack or a weird sport.", socials: { linkedin: "https://www.linkedin.com/in/krishna-yadav-13167b313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", mail: "mailto:krishnay24@iitk.ac.in", instagram: "https://www.instagram.com/krishnaa_pulse?igsh=MWcwZWZzNGQ2ZTk0dQ==", phone: "tel:+919027119879" } },
      { name: "Gunjan", role: "Secretary", avatar: "/gunjan.jpg", aiHint: "indian woman portrait", description: "I’m an Aerospace Engineering student who possesses a great love for creative art. I do love to explore new ideas also and am always excited for learning and growing. With hopeful and positive mindset, I approach every opportunity with enthusiasm and curiosity ", socials: { linkedin: "https://www.linkedin.com/in/gunjan-behmani-a6182a375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", mail: "mailto:gunjank24@iitk.ac.in", instagram: "https://instagram.com/1602gunjan", phone: "tel:+917015688383" } },
      { name: "Trisha Shekhawat", role: "Secretary", avatar: "/trisha.jpg", aiHint: "indian woman portrait", description: "I’m Trisha Shekhawat, a second-year Electrical Engineering student at IIT Kanpur, passionate about building systems that are both functional and well-designed. At DESCON, I work at the intersection of engineering and design — turning ideas into purposeful, polished projects.", socials: { linkedin: "https://www.linkedin.com/in/trisha-shekhawat-826121322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", mail: "mailto:trishas24@iitk.ac.in", instagram: "https://www.instagram.com/trisha_shekhawat09?igsh=N293am9ieW5haDhx", phone: "tel:+917878520815" } },
      { name: "Yanshika Singh", role: "Secretary", avatar: "/yanshka.jpg", aiHint: "indian woman portrait", description: "I am a mechanical undergraduate at IITK , I am also HSS secy", socials: { linkedin: "https://www.linkedin.com/in/yanshika-singh-971214375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", mail: "mailto:yanshikas24@iitk.ac.in", instagram: "https://www.instagram.com/yanshika9017?igsh=MWNpZGtybjhzMng0aQ==", phone: "tel:+916397356819" } },
      { name: "Jayendra Singh", role: "Secretary", avatar: "/jayendra.jpg", aiHint: "indian man portrait", description: "Creating design with Technology ", socials: { linkedin: "https://www.linkedin.com/in/jayendra-singh-51b001322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", mail: "mailto:jayendras24@iitk.ac.in", instagram: "https://www.instagram.com/the_majestic_jatin_27?igsh=aTRqeWphYzNlcWt4", phone: "tel:+919198219605" } },
      { name: "Pranjali Gadhe", role: "Secretary", avatar: "/Pranjali.jpeg", aiHint: "indian woman portrait", description: "I enjoy trying things I've never done before, even if I fail, I like the learning that comes with it.", socials: { linkedin: "http://linkedin.com/in/pranjali-gadhe-630b86338", mail: "mailto:pranjalig24@iitk.ac.in", instagram: "https://www.instagram.com/pranjali_g16", phone: "tel:+918869944772" } },
      { name: "R Lakshaya", role: "Secretary", avatar: "/RLakshaya.jpg", aiHint: "indian man portrait", description: "I am an electrical engineering student exploring designing", socials: { linkedin: "http://www.linkedin.com/in/lakshaya-r-3b6264", mail: "mailto:rlakshaya24@iitk.ac.in", instagram: "http://instagram.com/lakshaya013", phone: "tel:+919597276976" } },

    ]
  },
  "2023-24": {
    leaders: [
      {
        name: "Kavy Uprariya",
        role: "Leader"
      },
      {
        name: "Roshan Patil",
        role: "Leader"
      }
    ],
    secretaries: [
      { name: "Ananya", role: "Secretary" },
      { name: "Anshika", role: "Secretary" },
      { name: "Aurav", role: "Secretary" },
      { name: "Hemesh", role: "Secretary" },
      { name: "Hershal", role: "Secretary" },
      { name: "Kanika", role: "Secretary" },
      { name: "Meghana", role: "Secretary" },
      { name: "Mohit", role: "Secretary" },
      { name: "Muskan", role: "Secretary" },
      { name: "Prachi", role: "Secretary" },
      { name: "Pushpendra", role: "Secretary" },
      { name: "Samarita", role: "Secretary" },
      { name: "Shelly", role: "Secretary" },
      { name: "Sushant", role: "Secretary" },
      { name: "Vikash", role: "Secretary" },
      { name: "Vishnu", role: "Secretary" },
      { name: "Yuvraj", role: "Secretary" }
    ]
  }
}

export default function TeamSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter">
            Meet the Team
          </h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            The driving force behind DesCon is our dedicated team of students, passionate about shaping the future of design and construction.
          </p>
        </div>

        <Tabs defaultValue="2024-25" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:w-1/3 mx-auto mb-10">
            <TabsTrigger value="2024-25">2024-25</TabsTrigger>
            <TabsTrigger value="2023-24">2023-24</TabsTrigger>
          </TabsList>

          {Object.entries(teamData).map(([year, team]) => (
            <TabsContent key={year} value={year}>
              <div className="space-y-16">
                {/* Leaders */}
                <div>
                <h3 className="text-2xl md:text-4xl font-bold font-headline text-center mb-8">Overall Coordinators</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-2/3 mx-auto">
                      {team.leaders.map((member: any, index: number) => (
                        <div key={index} className="flex flex-col items-center text-center group p-4 rounded-lg hover:bg-card/50 transition-all">
                          <Avatar className="w-32 h-32 mb-4 border-4 border-transparent group-hover:border-primary transition-all duration-300">
                            {member.avatar && <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.aiHint}/>}
                            <AvatarFallback>{member.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                          <p className="text-primary font-medium">{member.role}</p>
                          {member.description && <p className="text-muted-foreground text-sm mt-2 h-10">{member.description}</p>}
                          {member.socials && (
                            <div className="flex gap-4 mt-4">
                              <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
                              <a href={member.socials.mail} className="text-muted-foreground hover:text-primary transition-colors"><Mail className="h-5 w-5" /></a>
                              <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
                              <a href={member.socials.phone} className="text-muted-foreground hover:text-primary transition-colors"><Phone className="h-5 w-5" /></a>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                </div>
                
                {/* Secretaries */}
                <div>
                    <h3 className="text-2xl md:text-4xl font-bold font-headline text-center mb-8">Secretaries</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8">
                      {team.secretaries.map((member: any, index: number) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                          <Avatar className="w-24 h-24 mb-4 border-4 border-transparent group-hover:border-accent transition-all duration-300">
                            {member.avatar && <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.aiHint}/>}
                            <AvatarFallback>{member.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <h3 className="text-lg font-bold font-headline">{member.name}</h3>
                          {member.socials && (
                            <div className="flex gap-3 mt-3">
                              <a href={member.socials.linkedin} className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-4 w-4" /></a>
                              <a href={member.socials.mail} className="text-muted-foreground hover:text-primary transition-colors"><Mail className="h-4 w-4" /></a>
                              <a href={member.socials.instagram} className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-4 w-4" /></a>
                              <a href={member.socials.phone} className="text-muted-foreground hover:text-primary transition-colors"><Phone className="h-4 w-4" /></a>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

