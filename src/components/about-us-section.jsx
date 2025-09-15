"use client";
import { useState, useEffect, useRef } from "react"
import {
  Pen,
  Award,
  Users,
  Calendar,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Zap,
  Book,
  Lightbulb,
  TrendingUp,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const statsRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }


  const services = [
    {
      icon: <Pen className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1" />,
      title: "Técnica Pomodoro",
      description:
        "Aprenda a gerenciar seu tempo e manter foco usando intervalos estratégicos de estudo, aumentando produtividade e eficiência.",
      position: "left",
    },
    {
      icon: <Book className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1" />,
      title: "Técnica Feynman",
      description:
        "Aprenda explicando para si mesmo ou para outra pessoa. Assim, você consolida o conhecimento e identifica pontos que precisa reforçar.",
      position: "left",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1" />,
      title: "Mapas Mentais",
      description:
        "Organize suas ideias de forma visual, conectando conceitos e facilitando a memorização e compreensão dos conteúdos.",
      position: "left",
    },
    {
      icon: <Pen className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1" />,
      title: "Prática Espaçada",
      description:
        "Revisões em intervalos estratégicos ajudam a fixar o conhecimento a longo prazo, tornando seu estudo mais eficiente.",
      position: "right",
    },
    {
      icon: <Book className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1" />,
      title: "Planejamento de Estudos",
      description:
        "Organize suas tarefas e conteúdos, estabeleça metas semanais e mensais, garantindo que nada seja esquecido ou deixado para depois.",
      position: "right",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1" />,
      title: "Execução Eficiente",
      description:
        "Implemente seus planos de estudo de forma organizada, seguindo suas metodologias e revisando conteúdos de forma estratégica.",
      position: "right",
    },
  ];

const stats = [
    {
      icon: <Award />,
      value: 50,
      label: "Templates Criados",
      suffix: "+",
    },
    {
      icon: <Users />,
      value: 2000,
      label: "Estudantes Beneficiados",
      suffix: "+",
    },
    {
      icon: <Calendar />,
      value: 2,
      label: "Anos de Experiência",
      suffix: "",
    },
    {
      icon: <TrendingUp />,
      value: 95,
      label: "Taxa de Sucesso",
      suffix: "%",
    },
  ];

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-30 px-4 overflow-hidden relative">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl"
        style={{ y: y1, rotate: rotate1 }} />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl"
        style={{ y: y2, rotate: rotate2 }} />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full "
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }} />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full /30"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }} />
      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}>
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <motion.span
            className=" font-medium mb-2 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">Sobre nós</h2>
          <motion.div
            className="w-24 h-1 "
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}></motion.div>
        </motion.div>

        <motion.p
          className="text-center max-w-2xl mx-auto"
          variants={itemVariants}>
          Somos uma equipe apaixonada por educação e metodologias de estudo, dedicada a criar templates e
          planos que ajudam estudantes a se organizarem, manterem o foco e alcançarem melhores resultados.
          Com atenção aos detalhes e compromisso com a eficiência, transformamos o aprendizado em uma
          experiência prática, clara e motivadora.
        </motion.p>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}>
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1} />
          ))}
        </motion.div>


      </motion.div>
    </section>
  );
}

function ServiceItem({
  icon,
  secondaryIcon,
  title,
  description,
  variants,
  delay,
  direction
}) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}>
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}>
        <motion.div
          className="  p-3 rounded-lg transition-colors duration-300 group-hover:/20 relative"
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}>
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3
          className="text-xl font-medium  group-hover: transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm  leading-relaxed pl-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}>
        {description}
      </motion.p>
      <motion.div
        className="mt-3 pl-12 flex items-center  text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}>
        <span className="flex items-center gap-1">
          Learn more <ArrowRight className="w-3 h-3" />
        </span>
      </motion.div>
    </motion.div>
  );
}

function StatCounter({
  icon,
  value,
  label,
  suffix,
  delay
}) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: false })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    } else if (!isInView && hasAnimated) {
      springValue.set(0)
      setHasAnimated(false)
    }
  }, [isInView, value, springValue, hasAnimated])

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div
      className="/50 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover: transition-colors duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}>
      <motion.div
        className="w-14 h-14 rounded-full /5 flex items-center justify-center mb-4  group-hover: transition-colors duration-300"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}>
        {icon}
      </motion.div>
      <motion.div
        ref={countRef}
        className="text-3xl font-bold  flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="/70 text-sm mt-1">{label}</p>
      <motion.div
        className="w-10 h-0.5  mt-3 group-hover:w-16 transition-all duration-300" />
    </motion.div>
  );
}

