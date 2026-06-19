import React, { useState, useEffect } from 'react';
import { resumeData } from './data/resumeData';
import { useScrollReveal } from './hooks/useScrollReveal';
import {
  Mail, MapPin, Linkedin, Github,
  Sun, Moon, Download, Briefcase, GraduationCap,
  ExternalLink, Wrench, Smartphone, Server, Layers, X, Monitor, Cpu, Code2,
  BarChart3
} from 'lucide-react';
import './App.css';

/**
 * Іконка бренду Signal (SVG)
 * @param size - Розмір іконки в пікселях
 */
const SignalIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.094 22l5.332-1.344c1.4.78 3 1.234 4.71 1.234 5.523 0 10-4.477 10-10S17.523 2 12 2zm0 1.636c4.62 0 8.364 3.744 8.364 8.364 0 4.62-3.744 8.364-8.364 8.364-1.442 0-2.8-.364-3.927-1.002l-.28-.158-2.613.658.658-2.528-.18-.314C4.846 15.918 4.545 14.7 4.545 13.364c0-5.32 4.135-8.364 7.455-8.364zM8.344 9.1c-.482 0-.872.39-.872.872v3.49c0 .482.39.872.872.872h6.982c.482 0 .872-.39.872-.872V9.972c0-.482-.39-.872-.872-.872H8.344z" />
  </svg>
);

/**
 * Головний компонент програми Резюме
 */
function App() {
  /* Стан для керування темою оформлення (світла/темна) */
  const [theme, setTheme] = useState('dark');
  /* Стан для відображення модального вікна з сертифікатом */
  const [activeCertificate, setActiveCertificate] = useState<string | null>(null);
  
  /* Підключення хука для анімації появи елементів при прокрутці */
  useScrollReveal();

  /* Ефект для оновлення атрибута теми в кореневому елементі */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  /**
   * Перемикає тему оформлення між світлою та темною
   */
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  /**
   * Відкриває діалогове вікно друку сторінки
   */
  const handlePrint = () => {
    window.print();
  };

  /**
   * Повертає відповідну іконку для категорії навичок на основі її назви
   * @param title - Назва категорії
   */
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'front-end': return <Layers size={22} />;
      case 'back-end': return <Server size={22} />;
      case 'mobile': return <Smartphone size={22} />;
      case 'desktop': return <Monitor size={22} />;
      case 'tools & others': return <Cpu size={22} />;
      case 'bi & analytics': return <BarChart3 size={22} />;
      default: return <Wrench size={18} />;
    }
  };

  return (
    <div className="app-container">
      {/* Модальне вікно перегляду сертифіката */}
      {activeCertificate && (
        <div className="certificate-modal no-print" onClick={() => setActiveCertificate(null)}>
          <div className="certificate-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setActiveCertificate(null)}>
              <X size={24} />
            </button>
            <img 
              src={activeCertificate.replace('/public', '')} 
              alt="Certificate" 
              className="certificate-img" 
            />
          </div>
        </div>
      )}

      {/* Плаваючі елементи керування (тема, друк) */}
      <div className="controls no-print">
        <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle Theme">
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button onClick={handlePrint} className="icon-btn" aria-label="Download PDF">
          <Download size={20} />
        </button>
      </div>

      {/* Шапка профілю (Hero section) */}
      <header className="hero fade-in">
        <div className="hero-content container">
          {resumeData.photo && (
            <div className="hero-photo-container">
              <img src={resumeData.photo} alt={resumeData.name} className="hero-photo" />
            </div>
          )}
          <div className="hero-text">
            {/* Основне ім'я розробника, відображається великим шрифтом у шапці профілю (Hero section) */}
            <h1>{resumeData.name}</h1>
            {/* Контейнер для підзаголовків (ролей) розробника, що центрує всі три рядки відносно один одного */}
            <div className="hero-subtitles">
              {/* Перший рядок посади розробника, виступає в ролі основного підзаголовка у шапці профілю */}
              <p className="subtitle">{resumeData.role}</p>
              {/* Другий рядок посади розробника, що відображає допоміжний роздільник у шапці профілю */}
              {resumeData.roleLine2 && <p className="subtitle">{resumeData.roleLine2}</p>}
              {/* Третій рядок посади розробника, що вказує додаткову спеціалізацію у шапці профілю */}
              {resumeData.roleLine3 && <p className="subtitle">{resumeData.roleLine3}</p>}
            </div>
          </div>
        </div>
      </header>

      {/* Основна сітка контенту */}
      <main className="main-grid container">
        {/* Бокова панель (Контакти та Про себе) */}
        <aside className="sidebar fade-in">
          <section className="glass-card">
            <h3>Contacts</h3>
            <ul className="contact-list">
              <li><Mail size={16} /> <a href={`mailto:${resumeData.contact.email}`}>Email</a></li>
              {resumeData.contact.signal && (
                <li>
                  <SignalIcon size={16} /> <a href={`https://${resumeData.contact.signal}`} target="_blank" rel="noreferrer">Signal</a>
                </li>
              )}
              <li><MapPin size={16} /> <span>{resumeData.contact.location}</span></li>
              <li><Linkedin size={16} /> <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><Github size={16} /> <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
          </section>

          <section className="glass-card no-print">
            <h3>About Me</h3>
            <p className="sidebar-summary">{resumeData.summary}</p>
          </section>
        </aside>

        {/* Основна область контенту (Навички та Досвід) */}
        <div className="content-area">
          {/* Секція навичок (3 колонки) */}
          <section className="fade-in section-block">
            <h2 className="section-title"><Code2 size={24} /> Skills</h2>
            <div className="skills-grid-3">
              {resumeData.skillCategories.map((category) => (
                <div key={category.title} className="skill-category-col">
                  <div className="category-header">
                    {getIcon(category.title)}
                    <h4 className="category-title">{category.title}</h4>
                  </div>
                  <div className="skills-list">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="skill-item">
                        <div className="skill-info">
                          <span>{skill.name}</span>
                          <span className="skill-lvl-text">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className="skill-progress"
                            style={{ '--progress': `${skill.level}%` } as React.CSSProperties}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Секція досвіду роботи (Timeline) */}
          <section className="fade-in section-block">
            <h2 className="section-title"><Briefcase size={24} /> Work Experience</h2>
            <div className="timeline">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content glass-card">
                    <h4>{exp.role}</h4>
                    <p className="company">{exp.company} | {exp.period}</p>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Секція освіти: відображає інформацію про навчальні заклади та отримані сертифікати */}
      <section className="fade-in section-block container">
        <h2 className="section-title"><GraduationCap size={24} /> Education</h2>
        {/* Сітка для карток освіти: 2 колонки на великих екранах */}
        <div className="education-grid">
          {resumeData.education.map((edu: any, index) => (
            /* Картка окремого навчального закладу або курсу */
            <div key={index} className="glass-card education-item">
              <h4>{edu.degree}</h4>
              <p className="school-name">{edu.school}</p>
              <p className="period-text">{edu.period}</p>
              {/* Кнопки дій для перегляду сертифікатів або акредитації */}
              {(edu.sertificate || edu.acreditation) && (
                <div className="education-actions no-print">
                  {edu.sertificate && (
                    <button 
                      className="action-btn" 
                      onClick={() => setActiveCertificate(edu.sertificate)}
                    >
                      Sertificate
                    </button>
                  )}
                  {edu.acreditation && (
                    <a 
                      href={edu.acreditation} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="action-btn link"
                    >
                      Acreditation
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Секція прикладів коду (Developer Signature) */}
      <section className="fade-in section-block container">
        <h2 className="section-title"><Layers size={24} /> Developer Signature</h2>
        <div className="signature-grid">
          {resumeData.codeSamples.map((sample, index) => (
            /* Картка прикладу коду з інтерактивним переглядом */
            <div key={index} className="glass-card code-sample-card">
              <h4>{sample.title}</h4>
              <div className="code-container">
                <pre><code>{sample.code}</code></pre>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Секція проектів (Full Width Container) */}
      <section className="fade-in section-block container projects-section">
        <h2 className="section-title"><ExternalLink size={24} /> Projects</h2>
        <div className="projects-grid">
          {resumeData.projects.map((project, index) => (
            /* Картка проекту з описом та посиланням */
            <div key={index} className="glass-card project-card">
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              {project.link !== "#" && <a href={project.link} target="_blank" rel="noreferrer" className="project-link">View Project</a>}
            </div>
          ))}
        </div>
      </section>

      {/* Футер сторінки */}
      <footer className="no-print container">
        <p>© {new Date().getFullYear()} {resumeData.name}. Built with React & TypeScript.</p>
      </footer>
    </div>
  );
}

export default App;

