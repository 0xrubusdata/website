import Head from 'next/head';
import styles from '../styles/roadmap.module.css';

export default function Roadmap() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RubusNetwork Roadmap</title>
        <meta name="description" content="RubusNetwork Roadmap and milestones" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>RubusNetwork Roadmap</h1>

        <section className={styles.phase}>
          <h2>Phase 1: Foundation (3 to 6 months)</h2>
          <p><strong>Main Objective:</strong> Build the technical and operational foundation for the project.</p>
          <ul>
            <li>
              <strong>Define the technical ecosystem:</strong>
              <ul>
                <li>Infrastructure setup:</li>
                <ul>
                  <li>Establish a well-structured GitHub repository (with sections for agents, services, and shared modules).</li>
                  <li>Select key technologies:</li>
                  <ul>
                    <li>Backend: Node.js (NestJS for a modular structure).</li>
                    <li>AI: OpenAI API or open-source models (Hugging Face) for agents.</li>
                    <li>Frontend: React for the web app (integrating Twitch, Discord, and data dashboards).</li>
                  </ul>
                </ul>
              </ul>
            </li>
            <li>
              <strong>Centralized SharedContext:</strong>
              <ul>
                <li>Set up a shared database for laws (legal service) and market data (trading service).</li>
                <li>Structure data for easy access by all agents.</li>
              </ul>
            </li>
          </ul>

          <h3>2. Develop a POC (Proof of Concept)</h3>
          <ul>
            <li>First engaging agent:</li>
            <ul>
              <li>For example, Miss Shaie to animate and interact on Twitch.</li>
              <li>Features: Automatically post content (e.g., absurd laws, crypto trends).</li>
            </ul>
            <li>First Twitch stream:</li>
            <ul>
              <li>A simple show with Miss Shaie discussing laws or market trends.</li>
              <li>Goal: Test the interaction dynamics with a small audience.</li>
            </ul>
          </ul>
        </section>

        <section className={styles.phase}>
          <h2>Phase 2: Expanding Services (6 to 12 months)</h2>
          <p><strong>Main Objective:</strong> Expand the services and make the project attractive to contributors and the public.</p>
          <ul>
            <li>
              <strong>Launch the trading service:</strong>
              <ul>
                <li>Trading modules:</li>
                <ul>
                  <li>Add specialized trading agents (crypto, forex, stocks).</li>
                  <li>Analyze trends on testnets (e.g., Binance Testnet or KuCoin Sandbox).</li>
                  <li>Publish performance reports live or on-demand (Twitch streams).</li>
                </ul>
                <li>RubusNetwork Trading League:</li>
                <ul>
                  <li>Organize a competition among trading agents.</li>
                  <li>Compare the results of trading strategies on testnets.</li>
                  <li>Reward the best agents with RubusCoins.</li>
                </ul>
              </ul>
            </li>
            <li>
              <strong>Expand the legal service:</strong>
              <ul>
                <li>Add additional agents (e.g., conservative, progressive) for interactive debates.</li>
                <li>Launch Twitch streams where agents discuss new laws or regulations.</li>
              </ul>
            </li>
            <li>
              <strong>Develop the RubusCoin economy:</strong>
              <ul>
                <li>Add staking mechanisms for users who want to support the project.</li>
                <li>Offer premium features (e.g., early access to trading or legal reports).</li>
              </ul>
            </li>
          </ul>
        </section>

        <p>✅ = Completed | ❌ = Pending</p>
      </main>
    </div>
  );
}
