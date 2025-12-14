/**
 * About Page
 * Displays company information, history, and certifications
 */

import { createLayout } from './layout';

export async function aboutPage(env) {
  // Load settings from KV for SEO
  let siteName = 'B2B Product Exhibition';
  try {
    const settingsJson = await env.STATIC_ASSETS.get('website_settings');
    if (settingsJson) {
      const settings = JSON.parse(settingsJson);
      siteName = settings.site_name || siteName;
    }
  } catch (error) {
    console.error('Error loading settings for SEO:', error);
  }

  const content = `
    <!-- Page Header -->
    <section class="hero" style="padding: 3rem 2rem;">
      <div class="container">
        <h1>About Our Company</h1>
        <p>Learn more about our journey, values, and commitment to excellence</p>
      </div>
    </section>

    <!-- Company Introduction -->
    <section class="container" style="margin-top: 3rem;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">
        <div>
          <h2 style="font-size: 2rem; margin-bottom: 1rem; color: var(--primary-color);">Who We Are</h2>
          <p style="color: var(--text-light); line-height: 1.8; margin-bottom: 1rem;">
            Founded in 2000, our company has grown to become a leading provider of high-quality
            industrial products and solutions. With over two decades of experience, we serve
            clients across 50+ countries worldwide.
          </p>
          <p style="color: var(--text-light); line-height: 1.8; margin-bottom: 1rem;">
            Our commitment to innovation, quality, and customer satisfaction has earned us
            recognition as an industry leader. We continuously invest in research and development
            to deliver cutting-edge solutions that meet the evolving needs of our customers.
          </p>
          <p style="color: var(--text-light); line-height: 1.8;">
            We pride ourselves on our professional team of experts who are dedicated to
            providing exceptional service and support to our clients worldwide.
          </p>
        </div>
        <div>
          <div style="background: var(--bg-light); padding: 2rem; border-radius: 0.5rem;">
            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Quick Facts</h3>
            <ul style="list-style: none;">
              <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">
                <strong>Founded:</strong> 2000
              </li>
              <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">
                <strong>Employees:</strong> 500+
              </li>
              <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">
                <strong>Countries Served:</strong> 50+
              </li>
              <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">
                <strong>Annual Production:</strong> 10,000+ units
              </li>
              <li style="padding: 0.5rem 0;">
                <strong>Certifications:</strong> ISO 9001, CE, SGS
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Values -->
    <section class="container" style="margin-top: 4rem;">
      <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: var(--primary-color);">Our Core Values</h2>
      <div class="grid grid-3">
        <div class="card">
          <div class="card-content" style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🎯</div>
            <h3 class="card-title">Quality First</h3>
            <p class="card-description">
              We never compromise on quality. Every product undergoes rigorous testing to ensure
              it meets the highest international standards.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-content" style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🚀</div>
            <h3 class="card-title">Innovation</h3>
            <p class="card-description">
              Continuous innovation drives us forward. We invest heavily in R&D to develop
              cutting-edge solutions for our customers.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-content" style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🤝</div>
            <h3 class="card-title">Customer Focus</h3>
            <p class="card-description">
              Our customers are at the heart of everything we do. We build long-term
              partnerships based on trust and mutual success.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-content" style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🌱</div>
            <h3 class="card-title">Sustainability</h3>
            <p class="card-description">
              We are committed to sustainable practices and environmental responsibility.
              Our operations prioritize eco-friendly processes and long-term environmental stewardship.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Timeline -->
    <section class="container" style="margin-top: 4rem;">
      <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: var(--primary-color);">Our Journey</h2>
      <div style="max-width: 800px; margin: 0 auto;">
        <div style="border-left: 3px solid var(--primary-color); padding-left: 2rem;">
          <div style="margin-bottom: 2rem; position: relative;">
            <div style="position: absolute; left: -2.5rem; width: 1.5rem; height: 1.5rem; border-radius: 50%; background: var(--primary-color);"></div>
            <h3 style="color: var(--primary-color); margin-bottom: 0.5rem;">2000 - Foundation</h3>
            <p style="color: var(--text-light);">Company established with a vision to provide quality industrial products.</p>
          </div>
          <div style="margin-bottom: 2rem; position: relative;">
            <div style="position: absolute; left: -2.5rem; width: 1.5rem; height: 1.5rem; border-radius: 50%; background: var(--primary-color);"></div>
            <h3 style="color: var(--primary-color); margin-bottom: 0.5rem;">2005 - International Expansion</h3>
            <p style="color: var(--text-light);">Began exporting products to international markets.</p>
          </div>
          <div style="margin-bottom: 2rem; position: relative;">
            <div style="position: absolute; left: -2.5rem; width: 1.5rem; height: 1.5rem; border-radius: 50%; background: var(--primary-color);"></div>
            <h3 style="color: var(--primary-color); margin-bottom: 0.5rem;">2010 - ISO Certification</h3>
            <p style="color: var(--text-light);">Achieved ISO 9001 certification for quality management.</p>
          </div>
          <div style="margin-bottom: 2rem; position: relative;">
            <div style="position: absolute; left: -2.5rem; width: 1.5rem; height: 1.5rem; border-radius: 50%; background: var(--primary-color);"></div>
            <h3 style="color: var(--primary-color); margin-bottom: 0.5rem;">2015 - Innovation Center</h3>
            <p style="color: var(--text-light);">Opened state-of-the-art research and development center.</p>
          </div>
          <div style="position: relative;">
            <div style="position: absolute; left: -2.5rem; width: 1.5rem; height: 1.5rem; border-radius: 50%; background: var(--primary-color);"></div>
            <h3 style="color: var(--primary-color); margin-bottom: 0.5rem;">2024 - Global Leader</h3>
            <p style="color: var(--text-light);">Recognized as a global leader in the industry, serving 50+ countries.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="container" style="margin-top: 4rem; margin-bottom: 3rem;">
      <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: var(--primary-color);">Certifications & Awards</h2>
      <div class="grid grid-2">
        <div class="card">
          <div class="card-content">
            <h3 class="card-title">🏆 ISO 9001:2015</h3>
            <p class="card-description">
              Quality Management System certification ensuring consistent product quality and customer satisfaction.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h3 class="card-title">✅ CE Certification</h3>
            <p class="card-description">
              European conformity marking indicating compliance with health, safety, and environmental standards.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h3 class="card-title">🔍 SGS Certified</h3>
            <p class="card-description">
              Third-party verification of product quality and compliance with international standards.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h3 class="card-title">⭐ Industry Excellence Award</h3>
            <p class="card-description">
              Recognition for outstanding contribution to the industry and innovation excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;

  const scripts = `
    <script>
      // Add responsive styles
      const style = document.createElement('style');
      style.textContent = \`
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      \`;
      document.head.appendChild(style);
    </script>
  `;

  const html = createLayout(
    `About Us - ${siteName}`,
    content,
    scripts,
    `Learn more about our journey, values, and commitment to excellence - ${siteName}`,
    false
  );

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
    },
  });
}
