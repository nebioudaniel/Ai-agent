"use client";

import Tag from "@/components/Tag";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
    {
        question: "እኛ ምን አንደኛ ስለአይ አገልግሎታችን እንተለያዩ እንዴት ተለያዩ ነበር?",
        answer: "እኛ ከታላቅ ተሞክሮ የምርመራ ስልቶች በማንኛውም ተሞክሮ ሳይሆን ፣ ስለአይ አገልግሎታችን አበላቸው ፣ ፍጥነትን እና ቀላልነትን በኩል እንዲያሳምኑ እና በአስፋል አሳብ ሰራን ተለያዩ አንደኛ እኛ ስለአይ አገልግሎታችን አበላቸው በአስተዋውቅ ያሳምኑ"
    },
    {
        question: "ማንኛውም ተሞክሮ ቀላልነት ተቋማት እንዲደርስ?",
        answer: "ማንኛውም ተሞክሮ በምንም አብራሪነት እና ስለአይ አገልግሎታችን ተሞክሮ አላለው እና በማንኛውም ትክክል ስለምን እሳምት ተማሩት?"
    },
    {
        question: "እንዴት በአይ አገልግሎት እንዲደርስ?",
        answer: "አይ አገልግሎታችን እንበለታታ እሳምትን ይነጋገሩ እና ባለፈ ምሳሌ ውስጥ በሕገወጥ ተግባር ይቀለም በቅርብ ተማሪችን ማንኛውም"
    },
    {
        question: "ምን አማካሪ አይነት አሰማተና?",
        answer: "ምንም ተለምድ አሰማተናም ማነውችን"
    }
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <section className="py-24 ">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>ጥያቄ እን መልስ</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    የተወሰኑ  ጥያቄዎች{" "}
                    <span className="text-lime-400">መልስ</span>
                </h2>

                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div
                            key={faq.question}
                            onClick={() => setSelectedIndex(faqIndex)}
                            className="bg-neutral-900 rounded-2xl border border-white/10 p-6 "
                        >
                            <div className="flex justify-between items-start">
                                <h3 className="font-medium m-0">
                                    {faq.question}
                                </h3>
                                <Plus
                                    size={30}
                                    className={twMerge(
                                        "feather feather-plus text-lime-400 flex-shrink-0 transition duration-300",
                                        selectedIndex === faqIndex &&
                                            "rotate-45"
                                    )}
                                />
                            </div>

                            <AnimatePresence>
                                {selectedIndex === faqIndex && (
                                    <motion.div
                                        initial={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        animate={{
                                            height: "auto",
                                            marginTop: 24,
                                        }}
                                        exit={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-white/50">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
