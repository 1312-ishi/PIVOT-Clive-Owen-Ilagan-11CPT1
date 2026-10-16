const quizData = {
    html: [
        {
            q: "What does HTML stand for?",
            a: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Transfer Main Language", "Home Tool Markup Language"],
            c: 0,
            e: "HTML stands for Hyper Text Markup Language."
        },
        {
            q: "Which declaration identifies an HTML5 document?",
            a: ["<html5>", "<!DOCTYPE html>", "<document>", "<head>"],
            c: 1,
            e: "The DOCTYPE declaration identifies the document as HTML5."
        },
        {
            q: "Which HTML element contains the main visible webpage content?",
            a: ["<head>", "<meta>", "<body>", "<title>"],
            c: 2,
            e: "The body element contains the main visible content of a webpage."
        },
        {
            q: "Which element creates the largest standard heading?",
            a: ["<h6>", "<heading>", "<h1>", "<head>"],
            c: 2,
            e: "The h1 element represents the highest-level heading."
        },
        {
            q: "Which HTML element creates a paragraph?",
            a: ["<p>", "<para>", "<text>", "<pg>"],
            c: 0,
            e: "The p element defines a paragraph."
        },
        {
            q: "Which HTML element creates a hyperlink?",
            a: ["<link>", "<a>", "<href>", "<url>"],
            c: 1,
            e: "The a element creates a hyperlink."
        },
        {
            q: "Which attribute specifies the destination of a hyperlink?",
            a: ["src", "alt", "href", "target"],
            c: 2,
            e: "The href attribute specifies the link destination."
        },
        {
            q: "Which HTML element displays an image?",
            a: ["<picture-file>", "<img>", "<image>", "<src>"],
            c: 1,
            e: "The img element embeds an image in a webpage."
        },
        {
            q: "Which attribute provides alternative text for an image?",
            a: ["title", "href", "alt", "name"],
            c: 2,
            e: "The alt attribute provides a text alternative for an image."
        },
        {
            q: "Which element creates an unordered list?",
            a: ["<ol>", "<ul>", "<li>", "<list>"],
            c: 1,
            e: "The ul element creates an unordered list."
        },
        {
            q: "Which element represents an individual list item?",
            a: ["<item>", "<ul>", "<li>", "<ol>"],
            c: 2,
            e: "The li element represents a list item."
        },
        {
            q: "Which HTML element inserts a line break?",
            a: ["<break>", "<lb>", "<br>", "<newline>"],
            c: 2,
            e: "The br element inserts a line break."
        },
        {
            q: "Which element sets the title shown in the browser tab?",
            a: ["<header>", "<title>", "<h1>", "<caption>"],
            c: 1,
            e: "The title element sets the document title shown in the browser tab."
        },
        {
            q: "Where is webpage metadata normally placed?",
            a: ["<body>", "<footer>", "<head>", "<main>"],
            c: 2,
            e: "Metadata is normally placed inside the head element."
        },
        {
            q: "Which attribute should uniquely identify an HTML element on a page?",
            a: ["class", "style", "id", "src"],
            c: 2,
            e: "An id identifies a particular element and should be unique on the page."
        },
        {
            q: "Which attribute can be shared by several HTML elements?",
            a: ["class", "id", "doctype", "alt"],
            c: 0,
            e: "Multiple elements can share the same class."
        },
        {
            q: "Which HTML element is used to create a form?",
            a: ["<input>", "<form>", "<label>", "<button-only>"],
            c: 1,
            e: "The form element groups controls used to collect and submit information."
        },
        {
            q: "Which code creates a single-line text input field?",
            a: ["<input type=\"text\">", "<text>", "<textarea>", "<p>"],
            c: 0,
            e: "An input element with type=\"text\" creates a single-line text field."
        },
        {
            q: "Which HTML element connects an external CSS file?",
            a: ["<style>", "<css>", "<link>", "<script>"],
            c: 2,
            e: "The link element connects an external stylesheet."
        },
        {
            q: "What is HTML mainly used for?",
            a: ["Structuring webpage content", "Styling colors and spacing", "Storing passwords", "Animating every element"],
            c: 0,
            e: "HTML provides the structure and meaning of webpage content."
        }
    ],

    css: [
        {
            q: "What does CSS stand for?",
            a: ["Computer Style System", "Cascading Style Sheets", "Creative Sheet Syntax", "Coded Styling Software"],
            c: 1,
            e: "CSS stands for Cascading Style Sheets."
        },
        {
            q: "Which is the correct syntax for a CSS rule?",
            a: ["selector (property: value;)", "selector { property: value; }", "property { selector = value; }", "selector = property: value;"],
            c: 1,
            e: "A CSS rule contains a selector and declarations inside curly braces."
        },
        {
            q: "What is the primary role of CSS in web development?",
            a: ["Structuring all content", "Managing databases", "Controlling visual presentation", "Replacing HTML"],
            c: 2,
            e: "CSS controls the visual presentation of a webpage, including colors, fonts, and layout."
        },
        {
            q: "What does the cascading mechanism help determine?",
            a: ["Which image loads first", "Which conflicting style applies", "Which HTML tag is created", "Which file is deleted"],
            c: 1,
            e: "The cascade helps determine which competing CSS declarations apply."
        },
        {
            q: "Which CSS type is written directly inside an HTML element's style attribute?",
            a: ["External CSS", "Internal CSS", "Inline CSS", "Imported CSS"],
            c: 2,
            e: "Inline CSS is written directly in an element's style attribute."
        },
        {
            q: "Where is internal CSS commonly written in an HTML document?",
            a: ["Inside a style attribute on an element", "Inside a style element", "Inside an external CSS file only", "Inside a script element"],
            c: 1,
            e: "Internal CSS is commonly written inside a style element, usually in the document's head."
        },
        {
            q: "Which HTML code correctly connects an external stylesheet named style.css?",
            a: ["<css src=\"style.css\">", "<script href=\"style.css\">", "<link rel=\"stylesheet\" href=\"style.css\">", "<style src=\"style.css\">"],
            c: 2,
            e: "A link element with rel=\"stylesheet\" connects the external CSS file."
        },
        {
            q: "Which selector targets elements with class=\"note\"?",
            a: ["#note", ".note", "note", "*note"],
            c: 1,
            e: "A period followed by a class name selects elements with that class."
        },
        {
            q: "Which selector targets the element with id=\"header\"?",
            a: [".header", "header", "#header", "*header"],
            c: 2,
            e: "The # symbol selects an element by its ID."
        },
        {
            q: "Which selector targets all paragraph elements?",
            a: [".p", "#p", "paragraph", "p"],
            c: 3,
            e: "The p type selector targets paragraph elements."
        },
        {
            q: "Which selector generally has greater specificity than a class selector?",
            a: ["Element selector", "ID selector", "Universal selector", "Attribute value alone"],
            c: 1,
            e: "An ID selector generally has greater specificity than a class selector."
        },
        {
            q: "What does the universal selector (*) target?",
            a: ["Only headings", "Only ID elements", "All elements", "Only paragraphs"],
            c: 2,
            e: "The universal selector matches all elements."
        },
        {
            q: "Which CSS property changes the color of text?",
            a: ["font-style", "background-color", "text-decoration", "color"],
            c: 3,
            e: "The color property sets the foreground color of text."
        },
        {
            q: "Which CSS property changes an element's background color?",
            a: ["font-color", "background-color", "text-color", "color-fill"],
            c: 1,
            e: "The background-color property sets an element's background color."
        },
        {
            q: "Which CSS property changes text size?",
            a: ["font-size", "text-weight", "size-font", "letter-color"],
            c: 0,
            e: "The font-size property controls the size of text."
        },
        {
            q: "Which CSS property rounds the corners of a button?",
            a: ["corner-style", "border-round", "border-radius", "round-corner"],
            c: 2,
            e: "The border-radius property rounds an element's corners."
        },
        {
            q: "Which selector targets button elements that have class=\"btn\"?",
            a: ["button#btn", ".btn button", "button.btn", "button = btn"],
            c: 2,
            e: "The selector button.btn targets button elements with the btn class."
        },
        {
            q: "Which symbol introduces a class selector in CSS?",
            a: ["#", ".", "@", "&"],
            c: 1,
            e: "A period introduces a class selector."
        },
        {
            q: "What is usually best for styling several webpages consistently?",
            a: ["Repeat inline styles", "Use an external stylesheet", "Use only browser defaults", "Put styles in every attribute"],
            c: 1,
            e: "External stylesheets let multiple pages share the same styles and make maintenance easier."
        },
        {
            q: "What helps determine which of two conflicting CSS declarations applies?",
            a: ["Only the HTML filename", "Only the number of HTML tags", "The cascade, specificity, and source order", "The screen size alone"],
            c: 2,
            e: "The cascade considers factors such as importance, specificity, and source order."
        }
    ]
};

const app = document.getElementById("quiz-app");
const quizType = document.body.dataset.quiz;
const questions = quizData[quizType];

let currentQuestion = 0;
let answers = new Array(questions ? questions.length : 0).fill(null);

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];
    });
}

function renderQuestion() {
    if (!app || !questions) return;

    const item = questions[currentQuestion];
    const progress = Math.round(
        ((currentQuestion + 1) / questions.length) * 100
    );

    app.innerHTML = `
        <section class="quiz-panel">
            <div class="quiz-top">
                <span>${quizType.toUpperCase()} QUIZ</span>
                <span>${quizType.toUpperCase()}</span>
            </div>

            <div class="progress-info">
                <span>Question ${currentQuestion + 1} of ${questions.length}</span>
                <span>${progress}%</span>
            </div>

            <div class="progress-track">
                <div class="progress-fill" style="width: ${progress}%"></div>
            </div>

            <h2 class="question-text">${escapeHTML(item.q)}</h2>

            <div class="answer-options">
                ${item.a.map(function (option, index) {
                    const selected = answers[currentQuestion] === index;

                    return `
                        <button
                            type="button"
                            class="answer-option ${selected ? "selected" : ""}"
                            data-index="${index}"
                            aria-pressed="${selected}"
                        >
                            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                            <span>${escapeHTML(option)}</span>
                        </button>
                    `;
                }).join("")}
            </div>

            <div class="quiz-controls">
                <button
                    type="button"
                    id="previous-btn"
                    ${currentQuestion === 0 ? "disabled" : ""}
                >
                    ← Previous
                </button>

                <button
                    type="button"
                    id="next-btn"
                    ${answers[currentQuestion] === null ? "disabled" : ""}
                >
                    ${currentQuestion === questions.length - 1
                        ? "Finish Quiz ✓"
                        : "Next Question →"}
                </button>
            </div>
        </section>
    `;

    app.querySelectorAll(".answer-option").forEach(function (button) {
        button.addEventListener("click", function () {
            answers[currentQuestion] = Number(button.dataset.index);
            renderQuestion();
        });
    });

    document.getElementById("previous-btn").addEventListener("click", function () {
        if (currentQuestion > 0) {
            currentQuestion--;
            renderQuestion();
        }
    });

    document.getElementById("next-btn").addEventListener("click", function () {
        if (answers[currentQuestion] === null) return;

        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            renderQuestion();
        } else {
            showResults();
        }
    });
}

function showResults() {
    const score = questions.reduce(function (total, question, index) {
        return total + (answers[index] === question.c ? 1 : 0);
    }, 0);

    const percentage = Math.round((score / questions.length) * 100);

    app.innerHTML = `
        <section class="quiz-panel results-panel">
            <span>${quizType.toUpperCase()} QUIZ</span>
            <h1>Quiz Completed!</h1>

            <p class="final-score">${score} / ${questions.length}</p>
            <p>You scored ${percentage}%.</p>

            <p>
                ${score === questions.length
                    ? "Excellent work! You answered every question correctly."
                    : "Review your answers below to see what you got right and what you can improve."}
            </p>

            <div class="result-buttons">
                <button type="button" id="review-btn">Review Answers</button>
                <button type="button" id="retry-btn">Try Again</button>
            </div>

            <div id="answer-review"></div>
        </section>
    `;

    document.getElementById("review-btn").addEventListener("click", showReview);

    document.getElementById("retry-btn").addEventListener("click", function () {
        currentQuestion = 0;
        answers = new Array(questions.length).fill(null);
        renderQuestion();
    });
}

function showReview() {
    const review = document.getElementById("answer-review");

    review.innerHTML = `
        <h2>Answer Review</h2>

        ${questions.map(function (question, index) {
            const chosen = answers[index];
            const correct = chosen === question.c;

            return `
                <article class="review-card">
                    <h3>${index + 1}. ${escapeHTML(question.q)}</h3>

                    ${question.a.map(function (option, optionIndex) {
                        let className = "";

                        if (optionIndex === question.c) {
                            className = "correct-answer";
                        } else if (optionIndex === chosen && !correct) {
                            className = "wrong-answer";
                        }

                        let label = "";

                        if (optionIndex === question.c) {
                            label = " — Correct answer";
                        } else if (optionIndex === chosen && !correct) {
                            label = " — Your answer";
                        }

                        return `
                            <div class="review-option ${className}">
                                ${String.fromCharCode(65 + optionIndex)}.
                                ${escapeHTML(option)}${label}
                            </div>
                        `;
                    }).join("")}

                    <p class="answer-status">
                        ${correct ? "✓ Correct" : "✗ Incorrect"}
                    </p>

                    <p>${escapeHTML(question.e)}</p>
                </article>
            `;
        }).join("")}
    `;

    review.scrollIntoView({ behavior: "smooth", block: "start" });
}

if (app && questions) {
    renderQuestion();
} else if (app) {
    app.textContent = "Quiz not found. Please return to the quiz selection page.";
}