import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { drRatnakar } from "@/json/image-url";

export default function UserCard() {
  return (
    <Card
      className={
        "group flex flex-col p-8 rounded-lg " +
        "bg-[#E6E7EE] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] rounded-lg"
      }
    >
      <div className="flex items-center space-x-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={drRatnakar} alt="Dr. Ratnakar Yadav" />
          <AvatarFallback>RY</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-xl font-semibold text-primary">
            Dr. Ratnakar Yadav
          </h3>
          <p className="text-sm text-text/80">
            MD (Med-USA), BHMS, BPT(MIAP), D. CuT., DCR, CCMP (J.J. Hospital
            Mumbai)
          </p>
        </div>
      </div>
      <blockquote className="mt-4 text-text/80 italic">
        &quot;There are always combine efforts of participants, Investigators
        and healthcare workers to bring new therapies. These have helped
        millions of people to live longer and healthier life. Clinical Prayog
        Clinical Research (We) are the strongest bridge between Investigators,
        Participants and CRO/Sponsors.&quot;
      </blockquote>
    </Card>
  );
}
