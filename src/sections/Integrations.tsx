import Tag from "@/components/Tag";
import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import relumeIcon from "@/assets/images/relume-logo.svg";
import framerIcon from "@/assets/images/framer-logo.svg";
import githubIcon from "@/assets/images/github-logo.svg";
import IntegrationColumn from "@/components/IntegrationColumn";

const integrations = [
    {
        name: "Figma",
        icon: figmaIcon,
        description: "Figma እንደ ማብራሪያ እና ስራዎችን ለማቅረብ በመተንተን መሳሪያ ነው። እኛ በእነዚህ መሳሪያዎች ስራችንን ለመስራት እንተግባለን።",
    },
    {
        name: "Notion",
        icon: notionIcon,
        description: "Notion ለተመናበሩ ማስታወቂያዎችና ሰነዶች ስለማቅረብ አንደኛ ባለታሪክ ስራ ተቋም ነው። በእኛ ስራዎች ተጠቃሚ ሆኖ ስለማስታወቂያ ተጠቅመን እንተግባለን።",
    },
    {
        name: "Slack",
        icon: slackIcon,
        description: "Slack በተማሪ ማኅበረሰብ አስተሳሰብ ፕላትፎርም ነው። በስራዎቻችን ውስጥ በእንተግባለን በመሆኑም ማቀላጠፊያ ነው።",
    },
    {
        name: "Relume",
        icon: relumeIcon,
        description: "Relume እንደ በሌላ ቀንበር ስምንት የመለኮት ማህበረሰብ ባለንዝቦት እንዲሁም የስራ አቀራረት ውበት ስራ ተቋም ነው። ስለሆነ እኛ በዚህ ማህበረሰብ መሳሪያ ለማቅረብ እንተግባለን።",
    },
    {
        name: "Framer",
        icon: framerIcon,
        description: "Framer የስምንት ድምር ቅርንጫፍ ቦታ ባለንዝቦት ነው። በስራዎችን እንተግባለን ይህንን ስራ ተቋም አጠቃላይ ተጠቅመን እንተግባለን።",
    },
    {
        name: "GitHub",
        icon: githubIcon,
        description: "GitHub እንደ አስተዳደር ላይ መለኮት አስፈላጊ ፕላትፎርም ነው። ስለሆነ በመሳሪያዎች አንደኛ በመሆኑም እኛ ስራችን በዚህ እንተግባለን።",
    },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden ">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>መሳሪያዎቻችን</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                            ስራዎቻችሁን በአሪፍ መልክ እንሰራለን{" "}
                            <span className="text-lime-400 ">ሊሎች</span>
                        </h2>

                        <p className="text-white/50 mt-4 text-lg ">
                        ከተወዳጅ መሳሪያዎችዎ ጋር በትክክል ይገናኛሉ።
                            እና መድረኮች. በማንኛውም የስራ ፍሰት ላይ መሰካት ቀላል ነው።
                            እና መድረኮችን ይተባበሩ።
                        </p>
                    </div>
                    <div>
                        <div className="grid md:grid-cols-2 gap-4 lg:h-[800px] h-[400px] lg:mt-0 mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <IntegrationColumn integrations={integrations} />
                            <IntegrationColumn
                                integrations={integrations.slice().reverse()}
                                className="hidden md:flex"
                                reverse
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
