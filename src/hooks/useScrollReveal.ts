import { useEffect } from 'react';

/**
 * Хук для обробки анімацій появи при прокрутці за допомогою Intersection Observer.
 * Оптимізований для правильного відключення та обробки динамічного контенту.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    /* Створення спостерігача для відстеження видимості елементів */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            /* Після того, як елемент став видимим, припиняємо спостереження за ним */
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' /* Початок анімації трохи раніше, ніж елемент увійде в зону видимості */
      }
    );

    /* Знаходимо всі елементи з класом .fade-in та додаємо їх до спостерігача */
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    /* Очищення при розмонтуванні компонента */
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
};
