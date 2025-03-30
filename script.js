document.addEventListener('DOMContentLoaded', () => {
    const chapterList = document.getElementById('chapter-list');
    const chapterTitle = document.getElementById('chapter-title');
    const chapterContent = document.getElementById('chapter-content');
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');

    // --- Chapter Data (Placeholders) ---
    // In a real application, this data might come from a server or separate files.
    const chapters = [
        // Foundation & The Problem
        { id: 1, title: "Introduction to Kashmir Shaivism", content: `
            <h3>Imagine a Path...</h3>
            <p>Imagine a spiritual path that doesn't ask you to reject the world, but instead invites you to see the sacred <em>within</em> everything. Imagine a way of understanding reality that says, at the deepest level, everything is connected, everything is divine, and <strong>you</strong> are part of that divinity. Welcome to the fascinating world of Kashmir Shaivism.</p>

            <h3>What is Kashmir Shaivism?</h3>
            <p>Kashmir Shaivism is an ancient spiritual tradition and philosophy that blossomed in the beautiful valley of Kashmir (in India) many centuries ago, roughly between the 8th and 12th centuries CE.</p>
            <ul>
                <li><strong>"Shaivism"</strong> means it's focused on the ultimate reality, which it calls <strong>Shiva</strong>.</li>
                <li><strong>"Kashmir"</strong> refers to the region where its most important teachers lived and wrote.</li>
            </ul>
            <p>Think of it as a powerful lens through which to view yourself and the universe. It's not just about beliefs; it's about <em>direct experience</em> and understanding the very nature of reality and your place within it.</p>

            <h3>The Big Idea: Everything is Divine Consciousness (Shiva)</h3>
            <p>The most central idea in Kashmir Shaivism is beautifully simple, yet profound: <strong>Everything is Shiva.</strong></p>
            <p>What does "Shiva" mean here? It doesn't just mean a deity with a trident sitting on a mountain (though that imagery is also part of Hindu tradition). In Kashmir Shaivism, Shiva represents the <strong>Ultimate Reality</strong>, the <strong>Supreme Consciousness</strong>, the very ground of all being.</p>
            <p>Imagine an infinite ocean. That ocean is Shiva. Everything that arises from it – the waves, the spray, the currents, the reflections on the surface – is also, fundamentally, the ocean. In the same way, Kashmir Shaivism teaches that the entire universe, including you, me, the stars, thoughts, feelings, and experiences, are all expressions of this one Divine Consciousness, Shiva. There is nothing outside of Shiva.</p>

            <h3>Shakti: The Creative Power</h3>
            <p>If Shiva is the infinite, still ocean, then <strong>Shakti</strong> is the ocean's power to create waves. Shakti is Shiva's own inherent <strong>Divine Energy</strong>, the dynamic, creative force that makes the universe appear.</p>
            <p>Shiva and Shakti are not separate. They are two sides of the same coin. Shiva is pure awareness, and Shakti is the power of that awareness to know itself and express itself as the vibrant, diverse world we experience. Think of fire and its heat, or the sun and its light – you can't have one without the other.</p>

            <h3>So, If We Are Divine... Why Don't We Feel It?</h3>
            <p>This is a great question and one that Kashmir Shaivism explores deeply. The teachings explain that we have temporarily <em>forgotten</em> our true nature. It's like we are wearing veils or layers that make us feel limited, separate, and searching for happiness outside ourselves. We identify with our limited body, mind, and ego, forgetting the infinite Consciousness we truly are.</p>

            <h3>The Goal: Remembering Who You Are</h3>
            <p>The goal of Kashmir Shaivism isn't to <em>become</em> divine – because you already <em>are</em> divine. The goal is <strong>Recognition</strong> (a key concept we'll explore later called <em>Pratyabhijna</em>). It's about removing those veils of forgetting and directly experiencing, or <em>recognizing</em>, your true identity as Shiva, as infinite Consciousness and Bliss.</p>

            <h3>What Makes Kashmir Shaivism Special?</h3>
            <ul>
                <li><strong>Non-Dual:</strong> It emphasizes the ultimate oneness of everything. There isn't a separate God somewhere else; divinity is right here, as the essence of all reality.</li>
                <li><strong>Life-Affirming:</strong> Unlike some paths that suggest renouncing the world, Kashmir Shaivism embraces all aspects of life as expressions of divine energy.</li>
                <li><strong>Focus on Experience:</strong> It emphasizes direct, personal experience and realization over blind faith or dogma.</li>
                <li><strong>Practical Paths:</strong> It offers various methods and paths (called <em>Upayas</em>) suited to different temperaments, guiding individuals toward recognition.</li>
            </ul>

            <h3>Your Journey Begins Here</h3>
            <p>This website is your guide to exploring this profound and beautiful tradition. In the coming chapters, we will dive deeper into:</p>
            <ul>
                <li>The nature of Shiva (Ultimate Reality) and Shakti (Divine Energy).</li>
                <li>How reality unfolds (the Tattvas).</li>
                <li>Why we feel limited (the Malas or veils).</li>
                <li>The different paths and techniques for recognizing our true nature.</li>
                <li>The wisdom of its key texts and teachers.</li>
            </ul>
            <p>Don't worry if these ideas seem new or big right now. We'll explore them step-by-step. The most important thing is to approach this journey with an open mind and a curious heart. Let's begin exploring the incredible insights of Kashmir Shaivism together!</p>
            ` },
        { id: 2, title: "The Concept of Shiva: The Ultimate Reality", content: `
            <h3>The Unbound Source: Understanding Shiva</h3>
            <p>In Chapter 1, we introduced Shiva as the Ultimate Reality. Here, we delve deeper. Shiva is not merely a deity but the fundamental ground of all existence – pure, infinite, unchanging <strong>Consciousness</strong> (often called <em>Cit</em>).</p>
            <p>Imagine Shiva as the vast, silent space in which the entire universe unfolds. It is beyond all attributes, descriptions, time, and space. It is the ultimate subject, the eternal witness, the source from which everything arises and into which everything dissolves.</p>
            <p>Key aspects of Shiva in Kashmir Shaivism:</p>
            <ul>
                <li><strong>Absolute Consciousness:</strong> The capacity to be aware.</li>
                <li><strong>Infinite Bliss (Ananda):</strong> The inherent nature of this consciousness is joy.</li>
                <li><strong>Perfect Freedom (Svatantrya):</strong> Absolute independence and the power to will, know, and act.</li>
                <li><strong>Unchanging & Eternal:</strong> Beyond birth, death, and transformation.</li>
            </ul>
            <p>Understanding Shiva is understanding the core essence of reality itself – the boundless potentiality that is the source of all manifestation.</p>
            ` },
        { id: 3, title: "Shakti: The Divine Energy", content: `
            <h3>The Cosmic Dance: Introducing Shakti</h3>
            <p>If Shiva is the infinite, still potential, <strong>Shakti</strong> is that potential in action. She is the inherent, dynamic <strong>Power</strong> or <strong>Energy</strong> of Shiva. Shakti is not separate from Shiva; She is the very expression of Shiva's freedom (Svatantrya) and consciousness.</p>
            <p>Think of Shiva as the sun and Shakti as its light and heat. They are inseparable aspects of the One Reality. Shakti is the force that:</p>
            <ul>
                <li>Creates, sustains, and dissolves the universe.</li>
                <li>Manifests the infinite diversity we see around us.</li>
                <li>Veils Shiva's true nature (as Maya Shakti).</li>
                <li>Reveals Shiva's true nature (as Grace or Anugraha Shakti).</li>
            </ul>
            <p>Shakti has countless forms and functions, often described through Her five fundamental powers:</p>
            <ol>
                <li><strong>Cit Shakti:</strong> Power of Consciousness</li>
                <li><strong>Ananda Shakti:</strong> Power of Bliss</li>
                <li><strong>Iccha Shakti:</strong> Power of Will</li>
                <li><strong>Jnana Shakti:</strong> Power of Knowledge</li>
                <li><strong>Kriya Shakti:</strong> Power of Action</li>
            </ol>
            <p>Understanding Shakti is key to understanding how the formless Absolute (Shiva) gives rise to the world of form and experience.</p>
            ` },
        { id: 4, title: "The Thirty-Six Tattvas: Mapping Reality", content: `
            <h3>From Pure Spirit to Solid Earth: The Tattvas</h3>
            <p>How does the One Reality (Shiva-Shakti) appear as the complex universe we experience? Kashmir Shaivism maps this process through the <strong>Thirty-Six Tattvas</strong> (principles or categories of reality).</p>
            <p>These Tattvas are not separate building blocks but rather stages or levels of manifestation, starting from the purest Consciousness and gradually becoming more dense and limited, down to the physical elements.</p>
            <p>The Tattvas are broadly grouped:</p>
            <ul>
                <li><strong>Shuddha Tattvas (Pure Principles):</strong> The first 5 Tattvas representing the realm of pure, universal Consciousness (Shiva, Shakti, Sadashiva, Ishvara, Shuddha Vidya).</li>
                <li><strong>Shuddhashuddha Tattvas (Pure-Impure Principles):</strong> The next 7 Tattvas, starting with Maya, which introduce limitation and differentiation (Maya and the 5 Kanchukas or cloaks, plus Purusha - the limited individual soul).</li>
                <li><strong>Ashuddha Tattvas (Impure Principles):</strong> The remaining 24 Tattvas, constituting the familiar realm of mind, senses, and matter (Prakriti, Buddhi, Ahamkara, Manas, the 5 sense organs, 5 action organs, 5 subtle elements, 5 gross elements).</li>
            </ul>
            <p>Studying the Tattvas provides a detailed framework for understanding the relationship between the Absolute and the relative, the Universal and the individual, and the path back from limitation to freedom.</p>
            ` },
        { id: 5, title: "Mala: The Veils of Limitation (Anava, Karma, Mayiya)", content: `
            <h3>Why We Forget: Understanding the Malas</h3>
            <p>If our true nature is infinite Shiva, why do we experience ourselves as limited, suffering beings? Kashmir Shaivism explains this through the concept of <strong>Malas</strong> – impurities or veils that obscure our inherent divinity.</p>
            <p>These are not sins in the moral sense, but fundamental limitations that arise with the process of manifestation. The three primary Malas are:</p>
            <ol>
                <li><strong>Anava Mala (Mala of Finitude/Individuality):</strong> The root limitation. It's the primal sense of being an incomplete, separate "I," lacking fullness. It makes us feel small and imperfect, forgetting our infinite nature.</li>
                <li><strong>Karma Mala (Mala of Action):</strong> Arising from Anava Mala, this is the veil of limited agency. It binds us to the cycle of cause and effect, where our actions (driven by limited identity) create impressions (samskaras) that lead to future experiences and further actions.</li>
                <li><strong>Mayiya Mala (Mala of Maya):</strong> The veil of differentiation and limited knowledge, arising from Shakti's power of Maya. It makes us perceive duality (subject-object, self-other) and obscures the underlying unity of all things. It limits our power of knowing and acting universally.</li>
            </ol>
            <p>These Malas work together to create the experience of the bound soul (Pashu). Understanding them is crucial for understanding the nature of bondage and the necessity of the spiritual path to remove these veils and recognize our true Self.</p>
            ` },
        // Deepening Understanding
        { id: 6, title: "Karma and Transmigration in Shaivism", content: `
            <h3>Introduction</h3>
            <p>In Kashmir Shaivism, the soul (<em>pashu</em>) is bound by three primary impurities (<em>malas</em>), as discussed in Chapter 5. Among these, <strong>karma</strong> plays a crucial role in perpetuating the cycle of birth and rebirth (<em>samsara</em>). Unlike fatalistic interpretations of karma in other traditions, Kashmir Shaivism presents karma as a dynamic, malleable force—one that can be transcended through awareness, divine grace (<em>shaktipat</em>), and yogic practices.</p>
            <p>This chapter explores:</p>
            <ul>
                <li>The nature of karma in Kashmir Shaivism</li>
                <li>How karma binds the soul to transmigration (<em>samsara</em>)</li>
                <li>The interplay between karma, free will (<em>svatantrya</em>), and divine grace</li>
                <li>Methods to dissolve karmic bonds</li>
            </ul>
            <hr>
            <h3>1. The Nature of Karma in Kashmir Shaivism</h3>
            <p>Karma, in its simplest definition, is the law of cause and effect governing actions (<em>kriyā</em>). However, Kashmir Shaivism offers a nuanced perspective:</p>
            <ul>
                <li><strong>Karma is not deterministic</strong> – Unlike rigid fatalism, Kashmir Shaivism teaches that Shiva’s free will (<em>svatantrya</em>) permeates all existence, meaning karma can be reshaped through spiritual practice.</li>
                <li><strong>Karma is stored in the karmic body (<em>karmashaya</em>)</strong> – Accumulated impressions (<em>samskaras</em>) from past actions create tendencies (<em>vasanas</em>) that influence future experiences.</li>
                <li><strong>Three types of karma</strong>:
                    <ul>
                        <li><strong>Sanchita Karma</strong> – The stored reservoir of past actions.</li>
                        <li><strong>Prarabdha Karma</strong> – The portion of karma currently unfolding in this lifetime.</li>
                        <li><strong>Agami Karma</strong> – Future karma generated by present actions.</li>
                    </ul>
                </li>
            </ul>
            <blockquote><p><em>"Karma is like a seed; when watered by ignorance (<em>ajnana</em>), it grows into suffering. When illuminated by awareness (<em>prakasha</em>), it dissolves into Shiva’s bliss."</em></p></blockquote>
            <hr>
            <h3>2. Karma and Transmigration (Samsara)</h3>
            <p>The soul (<em>jiva</em>) remains entangled in the cycle of rebirth due to:</p>
            <ul>
                <li><strong>Ignorance (Avidya)</strong> – Forgetting one’s true nature as Shiva.</li>
                <li><strong>Identification with the limited self</strong> – Believing oneself to be separate from divine consciousness.</li>
                <li><strong>The binding power of karma</strong> – Actions performed under delusion reinforce the illusion of separation.</li>
            </ul>
            <p>Kashmir Shaivism teaches that <strong>karma is not an external force but a self-imposed limitation</strong>. The <em>Shiva Sutras</em> (1.2) declare:</p>
            <blockquote><p><em>"Jñānaṁ bandhaḥ"</em> – <strong>"Knowledge (limited knowledge) is bondage."</strong></p></blockquote>
            <p>Only when the soul recognizes (<em>pratyabhijna</em>) its true nature as Shiva does karma lose its grip.</p>
            <hr>
            <h3>3. Free Will (Svatantrya) vs. Karma</h3>
            <p>A unique feature of Kashmir Shaivism is its emphasis on <strong>Shiva’s absolute freedom (<em>svatantrya</em>)</strong>. Unlike deterministic systems, this tradition asserts:</p>
            <ul>
                <li><strong>The soul has the power to transcend karma</strong> through:
                    <ul>
                        <li><strong>Self-awareness (<em>vimarsha</em>)</strong> – Recognizing one’s divine nature.</li>
                        <li><strong>Grace (<em>shaktipat</em>)</strong> – The descent of Shakti’s energy, which accelerates liberation.</li>
                        <li><strong>Yogic practices (<em>upayas</em>)</strong> – Methods to dissolve karmic residues (discussed in later chapters).</li>
                    </ul>
                </li>
                <li><strong>Karma is a play (<em>lila</em>) of consciousness</strong> – Shiva voluntarily takes on limitations to experience the drama of existence, yet remains ultimately free.</li>
            </ul>
            <hr>
            <h3>4. Dissolving Karma: The Path to Liberation</h3>
            <p>Kashmir Shaivism offers practical ways to transcend karma:</p>
            <ol>
                <li><strong>Awareness (<em>Prakasha</em>)</strong> – Simply observing thoughts and actions without identification weakens karmic bonds.</li>
                <li><strong>Meditation on Shiva-Shakti</strong> – Techniques like <em>bhāvanā</em> (contemplation) and <em>dhyāna</em> (meditation) purify the mind.</li>
                <li><strong>Mantra and Initiation</strong> – Empowered mantras (<em>bīja mantras</em>) received from a guru can dissolve deep karmic impressions.</li>
                <li><strong>Surrender to Grace (<em>Shaktipat</em>)</strong> – The descent of divine energy can instantly burn away karma.</li>
            </ol>
            <p>The <em>Vijñana Bhairava Tantra</em> (verse 109) states:</p>
            <blockquote><p><em>"When one merges into the space of consciousness, all karmas dissolve like clouds in the sky."</em></p></blockquote>
            <hr>
            <h3>Conclusion</h3>
            <p>Karma in Kashmir Shaivism is not an unbreakable chain but a <strong>self-created illusion</strong> that can be dissolved through recognition (<em>pratyabhijna</em>), yogic practice, and grace. The journey from bondage to liberation (<em>moksha</em>) is not about erasing karma but <strong>awakening to the truth that one was never bound in the first place</strong>.</p>
            <p>In the next chapter, we explore <strong>Chapter 7: Pashu – The Bound Soul</strong>, examining how the individual soul experiences limitation and seeks liberation.</p>
            <hr>
            <h3>Key Takeaways</h3>
            <ul>
                <li>✔ Karma is a dynamic, not fixed, force shaped by awareness.</li>
                <li>✔ Transmigration (<em>samsara</em>) persists due to ignorance (<em>avidya</em>) and identification with the limited self.</li>
                <li>✔ Shiva’s free will (<em>svatantrya</em>) allows the soul to transcend karma.</li>
                <li>✔ Liberation comes through recognition (<em>pratyabhijna</em>), grace (<em>shaktipat</em>), and yogic practice.</li>
            </ul>
            ` },
        { id: 7, title: "Pashu: The Bound Soul", content: `
            <h3>The Ontological Status of the Pashu</h3>
            <p>The pashu exists in a paradoxical state - simultaneously divine yet ignorant of its divinity. This apparent contradiction is resolved through the concept of <em>abhasavada</em> (the theory of manifestation):</p>
            <ol>
                <li><strong>As Shiva</strong>: At the ultimate level (paramarthika), the pashu is nothing but Shiva.</li>
                <li><strong>As Individual</strong>: At the transactional level (vyavaharika), it appears as limited due to:
                    <ul>
                        <li>The contraction of consciousness (sankocha)</li>
                        <li>The veiling power (avarana shakti)</li>
                        <li>The projecting power (vikshepa shakti)</li>
                    </ul>
                </li>
            </ol>
            <h3>The Five Sheaths of Bondage (Koshas)</h3>
            <p>Kashmir Shaivism elaborates on the Taittiriya Upanishad's koshas with a unique twist:</p>
            <table>
                <thead><tr><th>Kosha</th><th>Standard View</th><th>Shaiva Interpretation</th></tr></thead>
                <tbody>
                    <tr><td>Annamaya</td><td>Physical body</td><td>Bhuta-tattvas (earth, water etc.)</td></tr>
                    <tr><td>Pranamaya</td><td>Vital energy</td><td>Prana-Shakti as limited manifestation</td></tr>
                    <tr><td>Manomaya</td><td>Mental sheath</td><td>Constricted vimarsha (self-reflection)</td></tr>
                    <tr><td>Vijnanamaya</td><td>Wisdom sheath</td><td>Partial prakasha (illumination)</td></tr>
                    <tr><td>Anandamaya</td><td>Bliss sheath</td><td>Shadow of cit-ananda</td></tr>
                </tbody>
            </table>
            <h3>The Process of Bondage (Bandha)</h3>
            <ol>
                <li><strong>Primary Contraction</strong>: The first limitation (prathama sankocha) occurs when universal consciousness accepts "I am this" (idam-aham).</li>
                <li><strong>Mala Formation</strong>: The three malas crystallize this contraction:
                    <ul>
                        <li>Anava mala reduces infinity to finitude</li>
                        <li>Mayiya mala creates subject-object duality</li>
                        <li>Karma mala establishes cause-effect chains</li>
                    </ul>
                </li>
            </ol>
            <h3>Practical Implications for Seekers</h3>
            <ol>
                <li><strong>Self-Observation Exercise</strong>:
                    <ul>
                        <li>Notice moments of identification (e.g., "I am angry")</li>
                        <li>Trace back to the sense of limited "I" (ahamkara)</li>
                        <li>Rest in the space before identification occurs</li>
                    </ul>
                </li>
                <li><strong>Contemplative Inquiry</strong>:
                    <ul>
                        <li>"Who experiences limitation?"</li>
                        <li>"What remains when limitation is questioned?"</li>
                    </ul>
                </li>
            </ol>
            <h3>Scriptural References</h3>
            <ul>
                <li>Tantraloka 3.65-72: Detailed analysis of mala operation</li>
                <li>Spanda Karika 2.3: The pulsation between bound and free states</li>
                <li>Pratyabhijnahrdayam 12: The illusion of bondage</li>
            </ul>
            ` },
        { id: 8, title: "The Concept of Svatantrya: Divine Freedom", content: `
            <h3>The Metaphysics of Freedom</h3>
            <p>Svatantrya isn't mere absence of constraints but positive creative power:</p>
            <ol>
                <li><strong>Threefold Expression</strong>:
                    <ul>
                        <li>Iccha (Will): The initial impulse to manifest</li>
                        <li>Jnana (Knowledge): The self-luminous awareness</li>
                        <li>Kriya (Action): The dynamic expression</li>
                    </ul>
                </li>
                <li><strong>Paradoxical Nature</strong>:
                    <ul>
                        <li>Absolute freedom includes freedom to appear bound</li>
                        <li>The greatest power is the power to limit power</li>
                        <li>This is the "divine play" (divya lila) of Shiva</li>
                    </ul>
                </li>
            </ol>
            <h3>Comparative Analysis</h3>
            <table>
                <thead><tr><th>Tradition</th><th>Concept of Freedom</th><th>Shaiva Distinction</th></tr></thead>
                <tbody>
                    <tr><td>Advaita</td><td>Liberation from maya</td><td>Not just freedom from but freedom to</td></tr>
                    <tr><td>Buddhism</td><td>Release from samsara</td><td>Positive creative aspect emphasized</td></tr>
                    <tr><td>Western</td><td>Free will debate</td><td>Both determinism and freedom simultaneously true</td></tr>
                </tbody>
            </table>
            <h3>Practical Applications</h3>
            <ol>
                <li><strong>Freedom Meditation</strong>:
                    <ul>
                        <li>Contemplate: "What would infinite freedom feel like?"</li>
                        <li>Notice how the body-mind resists this contemplation</li>
                        <li>Allow the resistance to dissolve in awareness</li>
                    </ul>
                </li>
                <li><strong>Lila Sadhana</strong>:
                    <ul>
                        <li>Approach daily activities as Shiva's play</li>
                        <li>See limitations as voluntary self-concealment</li>
                        <li>Cultivate the attitude of the cosmic actor (nata)</li>
                    </ul>
                </li>
            </ol>
            <h3>Advanced Philosophical Points</h3>
            <ul>
                <li>The doctrine of non-interruption (avicchedavada): No real break in Shiva's freedom</li>
                <li>The concept of perfect fullness (purnata): Freedom includes all possibilities</li>
                <li>The resolution of theodicy: Suffering exists by divine will for the sake of the play</li>
            </ul>
            ` },
        { id: 9, title: "Shaktipat: The Descent of Grace", content: `
            <h3>The Mechanics of Grace</h3>
            <ol>
                <li><strong>Fourfold Transmission</strong>:
                    <ul>
                        <li>Vanispati (through speech)</li>
                        <li>Drishti (through gaze)</li>
                        <li>Sparsha (through touch)</li>
                        <li>Manasa (through thought)</li>
                    </ul>
                </li>
                <li><strong>Energetic Physiology</strong>:
                    <ul>
                        <li>Activation of the para-nadi (central channel)</li>
                        <li>Awakening of the anahata (unstruck sound)</li>
                        <li>The rising of kundalini in three phases:
                            <ul>
                                <li>Prathama (initial awakening)</li>
                                <li>Madhya (progressive unfolding)</li>
                                <li>Purna (complete illumination)</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ol>
            <h3>Signs of Authentic Shaktipat</h3>
            <ol>
                <li><strong>Physical</strong>:
                    <ul>
                        <li>Spontaneous asanas (postures)</li>
                        <li>Involuntary breath patterns (kumbhaka)</li>
                        <li>Unusual body temperatures</li>
                    </ul>
                </li>
                <li><strong>Psychological</strong>:
                    <ul>
                        <li>Dissolution of time perception</li>
                        <li>Non-conceptual awareness</li>
                        <li>Spontaneous mantra repetition</li>
                    </ul>
                </li>
                <li><strong>Energetic</strong>:
                    <ul>
                        <li>Currents of bliss (ananda-lahari)</li>
                        <li>Inner light phenomena (jyoti-darshana)</li>
                        <li>Sacred tremors (spanda)</li>
                    </ul>
                </li>
            </ol>
            <h3>Historical Cases</h3>
            <ol>
                <li><strong>Abhinavagupta</strong>: Received shaktipat through his guru Shambhunatha's gaze</li>
                <li><strong>Lalleshwari</strong>: Awakened through her guru's touch</li>
                <li><strong>Swami Lakshmanjoo</strong>: Transmission through presence alone</li>
            </ol>
            <h3>Preparatory Practices</h3>
            <ol>
                <li><strong>Purification (Shodhana)</strong>:
                    <ul>
                        <li>Mantra purification (japa)</li>
                        <li>Elemental cleansing (bhuta shuddhi)</li>
                        <li>Ethical preparation (yama/niyama)</li>
                    </ul>
                </li>
                <li><strong>Receptivity Cultivation</strong>:
                    <ul>
                        <li>Guru bhakti (devotion)</li>
                        <li>Surrender (atma-nivedana)</li>
                        <li>Humility (vinaya)</li>
                    </ul>
                </li>
            </ol>
            ` },
        { id: 10, title: "The Role of the Guru (Spiritual Guide)", content: `
            <h3>The Guru Tattva (Principle)</h3>
            <ol>
                <li><strong>Cosmic Aspects</strong>:
                    <ul>
                        <li>Dakshinamurti: The archetypal guru</li>
                        <li>Guru-chakra: The energy configuration of transmission</li>
                        <li>Guru-mandala: The lineage field of consciousness</li>
                    </ul>
                </li>
                <li><strong>Functional Dimensions</strong>:
                    <ul>
                        <li>Outer guru (physical teacher)</li>
                        <li>Inner guru (heart's wisdom)</li>
                        <li>Secret guru (the Self in all)</li>
                    </ul>
                </li>
            </ol>
            <h3>The Guru's Alchemical Process</h3>
            <ol>
                <li><strong>Stages of Transformation</strong>:
                    <ul>
                        <li>Lead of ignorance → Gold of wisdom</li>
                        <li>Through the mercury of grace</li>
                        <li>In the crucible of discipleship</li>
                    </ul>
                </li>
                <li><strong>The Fivefold Initiation</strong>:
                    <ul>
                        <li>Shakti-diksha (energy transmission)</li>
                        <li>Vedha-diksha (piercing the knots)</li>
                        <li>Kriya-diksha (action purification)</li>
                        <li>Varna-diksha (sound empowerment)</li>
                        <li>Sparsha-diksha (touch awakening)</li>
                    </ul>
                </li>
            </ol>
            <h3>Discipleship Requirements</h3>
            <ol>
                <li><strong>Four Qualifications</strong>:
                    <ul>
                        <li>Viveka (discernment)</li>
                        <li>Vairagya (dispassion)</li>
                        <li>Shatsampat (six virtues)</li>
                        <li>Mumukshutva (yearning)</li>
                    </ul>
                </li>
                <li><strong>Threefold Service</strong>:
                    <ul>
                        <li>Physical service (kayika)</li>
                        <li>Verbal service (vachika)</li>
                        <li>Mental service (manasika)</li>
                    </ul>
                </li>
            </ol>
            <h3>Dangers to Avoid</h3>
            <ol>
                <li><strong>Projection Pitfalls</strong>:
                    <ul>
                        <li>Idealization</li>
                        <li>Demonization</li>
                        <li>Personalization</li>
                    </ul>
                </li>
                <li><strong>Authenticity Tests</strong>:
                    <ul>
                        <li>Consistency with scriptures</li>
                        <li>Fruit in disciples</li>
                        <li>Energy signature</li>
                    </ul>
                </li>
            </ol>
            <h3>Contemporary Applications</h3>
            <ol>
                <li><strong>Virtual Guru-Disciple Dynamics</strong>:
                    <ul>
                        <li>Transmission through digital means</li>
                        <li>Maintaining sacred context</li>
                        <li>Avoiding dilution</li>
                    </ul>
                </li>
                <li><strong>Self-Initiation Possibilities</strong>:
                    <ul>
                        <li>Through intense bhavana</li>
                        <li>Via dream-state encounters</li>
                        <li>By direct recognition</li>
                    </ul>
                </li>
            </ol>
            ` },
        // The Paths (Upayas)
        { id: 11, title: "The Four Upayas: An Overview of the Paths", content: `<h3>Navigating the Journey: The Upayas</h3><p>Get an overview of the four primary means or paths (Upayas) described in Kashmir Shaivism for achieving liberation: Anavopaya, Shaktopaya, Shambhavopaya, and Anupaya. Understand their hierarchy and suitability for different aspirants.</p>` },
        { id: 12, title: "Anavopaya: The Path of Individual Effort (The Inferior Means)", content: `<h3>The Path of Action: Anavopaya</h3><p>Explore Anavopaya, the path relying on individual effort, rituals, concentration, and external practices. Understand why it's considered the 'inferior' or preliminary means, focusing on purifying the mind and body.</p>` },
        { id: 13, title: "Kriya Yoga in Anavopaya: Path of Ritual Action", content: `<h3>Ritual and Purification: Kriya Yoga</h3><p>Delve into Kriya Yoga within Anavopaya, focusing on prescribed actions, rituals, and observances designed to discipline the mind and senses and prepare the individual for deeper states.</p>` },
        { id: 14, title: "Jnana Yoga in Anavopaya: Path of Knowledge", content: `<h3>Knowledge and Intellect: Jnana Yoga</h3><p>Understand Jnana Yoga within Anavopaya, emphasizing the use of intellect, scriptural study, and philosophical discrimination to understand the nature of reality and differentiate the Self from the non-Self.</p>` },
        { id: 15, title: "Uchhara, Karana, Dhyana, Varna: Techniques within Anavopaya", content: `<h3>Techniques of Effort: Anavopaya Practices</h3><p>Learn about specific techniques employed in Anavopaya, such as Uchhara (breath control), Karana (postures/mudras), Dhyana (meditation/concentration), and Varna (focus on sound/mantra elements).</p>` },
        { id: 16, title: "Shaktopaya: The Path of Energy (The Medium Means)", content: `<h3>The Path of Energy: Shaktopaya</h3><p>Explore Shaktopaya, the path centered on harnessing the power of awareness and energy (Shakti). This path involves working directly with thoughts and consciousness without relying heavily on external practices.</p>` },
        { id: 17, title: "Mastering Vikalpas: Working with Thoughts in Shaktopaya", content: `<h3>Transforming Thought: Vikalpas</h3><p>Understand the role of Vikalpas (thoughts, mental constructs) in Shaktopaya. Learn techniques to observe, purify, and ultimately utilize the energy of thought itself to realize the underlying Consciousness.</p>` },
        { id: 18, title: "Mantra Shakti: The Power of Sacred Sound", content: `<h3>The Power of Sound: Mantra Shakti</h3><p>Delve into the use of Mantra in Shaktopaya. Understand how specific sounds are seen as embodiments of consciousness and energy, used to awaken and transform the practitioner's awareness.</p>` },
        { id: 19, title: "Contemplation on the Self: Core of Shaktopaya", content: `<h3>Focusing Awareness: Contemplation</h3><p>Explore the central practice of Shaktopaya: sustained contemplation and awareness focused on the 'I'-consciousness, recognizing it as the universal Shiva-Shakti.</p>` },
        { id: 20, title: "Shambhavopaya: The Path of Shiva (The Superior Means)", content: `<h3>The Path of Will: Shambhavopaya</h3><p>Discover Shambhavopaya, the direct path of Shiva, which operates through the power of will (Iccha Shakti) and requires minimal effort. It involves abiding in thought-free awareness.</p>` },
        { id: 21, title: "Ichha Shakti: The Power of Will in Shambhavopaya", content: `<h3>The Force of Will: Ichha Shakti</h3><p>Understand the role of Ichha Shakti (Power of Will) in Shambhavopaya. This path relies on the sheer intention and will to recognize one's Shiva nature, bypassing lower-level practices.</p>` },
        { id: 22, title: "Effortless Awareness: The Nature of Shambhavopaya", content: `<h3>Beyond Effort: Effortless Awareness</h3><p>Explore the core of Shambhavopaya: maintaining a state of effortless, objectless awareness. Understand how simply 'being' in this state reveals the true nature of Consciousness.</p>` },
        { id: 23, title: "Matrika Shakti: The Creative Power of Phonemes", content: `<h3>The Cosmic Alphabet: Matrika Shakti</h3><p>Learn about Matrika Shakti, the creative power inherent in the phonemes of language. Understand how these fundamental sounds are seen as the building blocks of the universe and consciousness itself.</p>` },
        { id: 24, title: "Anupaya: The Pathless Path (The Supreme Means / Annutara)", content: `<h3>The Pathless Path: Anupaya</h3><p>Discover Anupaya (or Annutara), the 'non-path' or supreme means. This is not a practice but the state of immediate, spontaneous recognition of one's Shiva nature, often triggered by the Guru's grace.</p>` },
        { id: 25, title: "Spontaneous Realization: The Essence of Anupaya", content: `<h3>Instant Recognition: Spontaneous Realization</h3><p>Explore the nature of realization in Anupaya – a sudden, effortless dawning of the truth that requires no prior practice or preparation, representing the highest state.</p>` },
        // Core Concepts
        { id: 26, title: "Spanda: The Sacred Tremor of Consciousness", content: `<h3>The Divine Pulse: Spanda</h3><p>Delve into the concept of Spanda – the subtle, sacred throb or vibration of Consciousness. Understand how this dynamic pulsation is the underlying reality of all manifestation and the key to experiencing Shiva.</p>` },
        { id: 27, title: "Pratyabhijna: The Philosophy of Recognition", content: `<h3>Remembering the Self: Pratyabhijna</h3><p>Explore Pratyabhijna, the cornerstone philosophy of 'Recognition'. Understand that liberation is not about achieving something new, but about recognizing the divinity that was always present but forgotten.</p>` },
        { id: 28, title: "Vimarsha: Shiva's Self-Awareness", content: `<h3>Consciousness Aware of Itself: Vimarsha</h3><p>Understand Vimarsha, the self-reflective, self-aware nature of Shiva. It is the inherent capacity of Consciousness (Cit) to know itself, which is synonymous with Shakti, the dynamic power.</p>` },
        { id: 29, title: "Cit and Ananda: Consciousness and Bliss", content: `<h3>The Nature of Reality: Cit and Ananda</h3><p>Revisit Cit (Consciousness) and Ananda (Bliss) as the fundamental nature of the Ultimate Reality, Shiva. Understand how these two are intrinsically linked and form the essence of liberated experience.</p>` },
        { id: 30, title: "The Nature of the Limited Self (Jiva) vs. The Universal Self (Shiva)", content: `<h3>Two Perspectives: Jiva and Shiva</h3><p>Contrast the experience of the limited individual self (Jiva), bound by Malas, with the infinite, universal Self (Shiva). Understand how the Jiva is ultimately non-different from Shiva.</p>` },
        { id: 31, title: "Kanchukas: The Five Cloaks of Limitation (Beyond Malas)", content: `<h3>The Cloaks of Forgetting: Kanchukas</h3><p>Explore the Kanchukas, the five specific 'cloaks' or contractions of Shiva's infinite powers (derived from Maya) that create the limited experience of the Purusha (individual soul): limited action, knowledge, desire, time, and space.</p>` },
        { id: 32, title: "Understanding the Three States (Waking, Dreaming, Deep Sleep)", content: `<h3>Mapping Experience: The Three States</h3><p>Analyze the three ordinary states of consciousness – waking (Jagrat), dreaming (Svapna), and deep sleep (Sushupti) – from the perspective of Kashmir Shaivism, seeing them as limited plays of consciousness.</p>` },
        { id: 33, title: "Turiya: The Fourth State of Consciousness", content: `<h3>Beyond the Ordinary: Turiya</h3><p>Discover Turiya, the 'Fourth State'. This is the state of pure witnessing consciousness that underlies and permeates the other three states, representing the first glimpse of the true Self.</p>` },
        { id: 34, title: "Turiyatita: Beyond the Fourth State", content: `<h3>The Absolute State: Turiyatita</h3><p>Explore Turiyatita, the state 'beyond the Fourth'. This is not merely witnessing but the full immersion and identity with the Absolute Shiva Consciousness, the ultimate goal.</p>` },
        // Key Texts
        { id: 35, title: "The Shiva Sutras: Aphorisms of Supreme Identity", content: `<h3>Foundation Texts: Shiva Sutras</h3><p>Introduce the Shiva Sutras, a foundational text revealed to Vasugupta. Explore these concise aphorisms that encapsulate the core principles of non-dual Shaivism and the paths to recognition.</p>` },
        { id: 36, title: "Exploring the Spanda Karikas: Verses on Vibration", content: `<h3>Verses on Vibration: Spanda Karikas</h3><p>Delve into the Spanda Karikas, attributed to Vasugupta or his disciple Kallata. Understand these verses that elaborate on the Spanda principle – the dynamic vibration of Consciousness.</p>` },
        { id: 37, title: "Vijñana Bhairava Tantra: 112 Methods of Meditation", content: `<h3>A Compendium of Practices: Vijñana Bhairava Tantra</h3><p>Explore the Vijñana Bhairava Tantra, a unique text presenting 112 dharanas (meditation techniques) through a dialogue between Shiva and Shakti, covering a vast range of approaches to centering in Consciousness.</p>` },
        { id: 38, title: "Pratyabhijñāhṛdayam: The Heart of Recognition (Kshemaraja)", content: `<h3>The Essence of Recognition: Pratyabhijñāhṛdayam</h3><p>Introduce the Pratyabhijñāhṛdayam ('Heart of Recognition') by Kshemaraja. Understand this concise text that summarizes the Pratyabhijna philosophy, making it accessible.</p>` },
        { id: 39, title: "Introduction to Tantraloka: Abhinavagupta's Magnum Opus", content: `<h3>The Great Synthesis: Tantraloka</h3><p>Get an introduction to the Tantraloka, the monumental encyclopedic work by the master Abhinavagupta, which synthesizes the entirety of Shaiva Tantra and philosophy.</p>` },
        { id: 40, title: "Parātrīśikā Vivarana: Abhinavagupta on the Highest Goddess", content: `<h3>Commentary on the Supreme: Parātrīśikā Vivarana</h3><p>Explore Abhinavagupta's profound commentary, the Parātrīśikā Vivarana, focusing on the esoteric meaning of the Parātrīśikā Tantra and the nature of the Supreme Goddess (Shakti).</p>` },
        // Major Figures
        { id: 41, title: "Vasugupta: Receiver of the Shiva Sutras", content: `<h3>The Revealer: Vasugupta</h3><p>Learn about Vasugupta (c. 8th-9th century CE), the sage to whom the Shiva Sutras were revealed, marking a key point in the articulation of Kashmir Shaivism.</p>` },
        { id: 42, title: "Somananda: Founder of the Pratyabhijna School", content: `<h3>Founder of Recognition: Somananda</h3><p>Discover Somananda (c. 9th-10th century CE), considered the founder of the Pratyabhijna school of thought, who emphasized logical reasoning alongside scriptural authority.</p>` },
        { id: 43, title: "Utpaladeva: Shaping the Philosophy of Recognition", content: `<h3>Architect of Recognition: Utpaladeva</h3><p>Explore the contributions of Utpaladeva (c. 10th century CE), Somananda's disciple, who further developed and systematized the Pratyabhijna philosophy, particularly in his Ishvara Pratyabhijna Karikas.</p>` },
        { id: 44, title: "Abhinavagupta: The Polymath Master", content: `<h3>The Master Synthesizer: Abhinavagupta</h3><p>Learn about the towering figure of Abhinavagupta (c. 10th-11th century CE), a philosopher, mystic, and aesthetician who synthesized various Shaiva schools and authored seminal works like the Tantraloka.</p>` },
        { id: 45, title: "Kshemaraja: Systematizer and Commentator", content: `<h3>The Great Commentator: Kshemaraja</h3><p>Discover Kshemaraja (c. 11th century CE), Abhinavagupta's primary disciple, known for his insightful commentaries and concise summaries (like Pratyabhijñāhṛdayam) that made the complex philosophy more accessible.</p>` },
        // The Goal & Living
        { id: 46, title: "Moksha (Liberation) in Kashmir Shaivism", content: `<h3>The Ultimate Goal: Moksha</h3><p>Understand the concept of Moksha (Liberation) in Kashmir Shaivism. It's not about escaping the world, but about the full recognition (Pratyabhijna) of one's true nature as Shiva, leading to freedom from limitation.</p>` },
        { id: 47, title: "Jivanmukti: Liberation While Living", content: `<h3>Freedom Here and Now: Jivanmukti</h3><p>Explore the ideal of Jivanmukti – liberation while still embodied. Understand how one can live in the world with full awareness and freedom, experiencing the play of Shakti while rooted in Shiva consciousness.</p>` },
        { id: 48, title: "Bhairava: The State of Fullness and Awe", content: `<h3>The State of Awe: Bhairava</h3><p>Delve into the state of Bhairava – the terrifyingly awesome, undifferentiated state of pure Consciousness where all distinctions dissolve. Understand this as a key descriptor of the liberated state.</p>` },
        { id: 49, title: "Integrating Kashmir Shaivism into Daily Life", content: `<h3>Living the Philosophy: Integration</h3><p>Discuss practical ways to integrate the insights and perspectives of Kashmir Shaivism into everyday life, seeing the divine in the mundane and transforming one's relationship with the world.</p>` },
        { id: 50, title: "The Continuing Relevance of Kashmir Shaivism", content: `<h3>Timeless Wisdom: Relevance Today</h3><p>Reflect on the enduring relevance of Kashmir Shaivism in the modern world, offering profound insights into consciousness, reality, and the potential for human transformation and liberation.</p>` }
    ];

    // --- Functions ---

    // Populate the sidebar navigation
    function populateNav() {
        if (!chapterList) return;
        chapters.forEach(chapter => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#chapter-${chapter.id}`;
            link.textContent = `Chapter ${chapter.id}: ${chapter.title}`;
            link.dataset.chapterId = chapter.id;
            listItem.appendChild(link);
            chapterList.appendChild(listItem);
        });
    }

    // Load chapter content into the main area
    function loadChapter(chapterId) {
        const chapter = chapters.find(ch => ch.id === parseInt(chapterId));
        if (chapter && chapterTitle && chapterContent) {
            chapterTitle.textContent = chapter.title;
            chapterContent.innerHTML = chapter.content; // Use innerHTML to render basic HTML tags in content

            // Update active link
            document.querySelectorAll('#chapter-list a').forEach(a => {
                a.classList.remove('active');
                if (a.dataset.chapterId === chapterId) {
                    a.classList.add('active');
                }
            });

            // Scroll content area to top
            document.querySelector('.content').scrollTop = 0;

        } else if (chapterId === 'welcome' && chapterTitle && chapterContent) {
             // Handle initial welcome state if needed (though default HTML covers it)
             chapterTitle.textContent = "Welcome";
             chapterContent.innerHTML = `
                <p>Select a chapter from the sidebar to begin your journey into the profound teachings of Kashmir Shaivism.</p>
                <p>This philosophy, originating in the Kashmir valley, offers a unique perspective on consciousness, reality, and the path to liberation, centered around the recognition of the divine Shiva nature within all beings.</p>
                 <div class="shiva-symbol">🕉️</div>
             `;
             document.querySelectorAll('#chapter-list a').forEach(a => a.classList.remove('active'));
        }
    }

    // --- Event Listeners ---

    // Handle clicks on chapter links
    if (chapterList) {
        chapterList.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                event.preventDefault();
                const chapterId = event.target.dataset.chapterId;
                loadChapter(chapterId);
                // Optional: Update URL hash
                // window.location.hash = `chapter-${chapterId}`;

                 // If on mobile, hide sidebar after selection
                 if (window.innerWidth <= 768 && sidebar.classList.contains('sidebar-visible')) {
                    sidebar.classList.remove('sidebar-visible');
                 }
            }
        });
    }

    // Handle clicks on the sidebar toggle button
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('sidebar-visible');
        });
    }

    // Optional: Close sidebar if user clicks outside of it on mobile (more complex)
    // document.addEventListener('click', (event) => {
    //     if (window.innerWidth <= 768 && sidebar.classList.contains('sidebar-visible')) {
    //         const isClickInsideSidebar = sidebar.contains(event.target);
    //         const isClickOnToggleButton = sidebarToggle.contains(event.target);
    //         if (!isClickInsideSidebar && !isClickOnToggleButton) {
    //             sidebar.classList.remove('sidebar-visible');
    //         }
    //     }
    // });

    // Optional: Load chapter based on URL hash on initial load
    // function loadChapterFromHash() {
    //     const hash = window.location.hash;
    //     if (hash && hash.startsWith('#chapter-')) {
    //         const chapterId = hash.substring('#chapter-'.length);
    //         loadChapter(chapterId);
    //     } else {
    //         // Load default or welcome state if no specific chapter hash
    //         loadChapter('welcome');
    //     }
    // }

    // --- Initialization ---
    populateNav();
    // loadChapterFromHash(); // Uncomment if you want hash-based navigation
    // Load welcome message initially (redundant as it's in HTML, but safe)
     if (!window.location.hash) {
        loadChapter('welcome');
     }

});
