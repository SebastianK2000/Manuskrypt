import React from 'react';
import '../style/blog.css';

const BlogPage = () => {
    const categories = [
        "Wszystko",
        "Abonament",
        "Android",
        "Ankieta",
        "Aplikacja",
        "Artyku�y",
        "Audiobooki",
        "Autorzy",
        "Bestsellery",
        "Biblioteki",
        "Blogi",
        "Book box",
        "Czytaj bez limitu",
        "Darmowe czytanie",
        "E-booki",
        "E-czytnik",
        "InkBOOK",
        "iPhone/iPad",
        "Je�ycjada",
        "Kindle",
        "Klub Mola Ksi��kowego",
        "Konkursy",
        "Magazyn Prolog",
        "Nowo�ci",
        "Partnerzy",
        "Platforma Legimi",
        "PocketBook",
        "PocktBook",
        "Prawa autorskie",
        "Promocje",
        "Rankingi",
        "Recenzje",
        "Samsung",
        "Spo�eczno�� Legimi",
        "Tablet Dante",
        "Tydzie� w Legimi",
        "Tylko w Legimi",
        "Wielka 5 Legimi",
        "Windows 8",
        "Windows Phone",
        "Wydarzenia",
        "Wydawcy",
        "Wywiady",
        "Zapowiedzi"
    ];

    const topics = [
        "Temat 1",
        "Temat 2",
        "Temat 3",
        // Dodaj wi�cej temat�w tutaj
    ];

    return (
        <div className="blog-page">
            <div className="categories">
                <h2>Kategorie</h2>
                <ul>
                    {categories.map((category, index) => (
                        <li key={index}>{category}</li>
                    ))}
                </ul>
            </div>
            <div className="topics">
                <h2>Tematy</h2>
                {topics.map((topic, index) => (
                    <button key={index}>{topic}</button>
                ))}
            </div>
        </div>
    );
}

export default BlogPage;
