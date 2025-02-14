import styles from "./Part4-5.css";




function Part5() {

return <section>
 <h2 className={styles.sectionTitle}>Worried about AI? Let’s clear things up!</h2>
      <div className={styles.infoContainer}>
        <div className={styles.infoCard}>🔒 AI follows strict security rules to protect your data.</div>
        <div className={styles.infoCard}>✅ If you can send an email, you can use AI!</div>
      </div>

      <h2 className={styles.sectionTitle}>Myth-Busting Section</h2>
      <div className={styles.mythContainer}>
        <div className={styles.mythItem}>❌ "I’m too old to learn AI." → ✅ "If you can use email, you can use AI!"</div>
        <div className={styles.mythItem}>❌ "AI will replace my job." → ✅ "AI handles repetitive tasks so you can focus on important work!"</div>
        <div className={styles.mythItem}>❌ "AI is not safe." → ✅ "AI follows strict security guidelines—see how your data stays protected."</div>
      </div>

      <h2 className={styles.sectionTitle}>Join a community of AI learners!</h2>
      <p className={styles.description}>
        Get help, share experiences, and learn AI together.
      </p>
      <button className={styles.forumButton}>🧑‍💻 Join AI Learners Forum</button>
    </section>;
};


export default Part5;
