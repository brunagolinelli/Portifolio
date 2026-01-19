import { Layout } from '@/components/layout'
import {
    About,
    HeroSection,
    SkillsSection,
    ProjectsSection,
    ExperienceSection,
    ContactSection,
} from '@/components/sections'
import {
    navigationItems,
    heroData,
    aboutData,
    skillsData,
    projectsData,
    experienceData,
    contactData,
} from '@/data'

export const Home = () => {
    return (
        <Layout
            headerProps={{
                navigationItems,
                logoText: 'Bruna Nallis',
            }}
            footerProps={{
                authorName: 'Bruna Nallis',
                socialLinks: {
                    github: 'https://github.com/brunanallis',
                    linkedin: 'https://linkedin.com/in/brunanallis',
                    email: 'contato@brunanallis.com',
                },
            }}
        >
            <HeroSection data={heroData} />
            <About data={aboutData} />
            <SkillsSection data={skillsData} />
            <ProjectsSection data={projectsData} />
            <ExperienceSection data={experienceData} />
            <ContactSection data={contactData} />
        </Layout>
    )
}

