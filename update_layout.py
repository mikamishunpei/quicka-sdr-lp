import re

with open('public/presentations/clinic/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Regex to replace vw and vh with cqi and cqh
content = re.sub(r'(\d+(?:\.\d+)?)vw', r'\1cqi', content)
content = re.sub(r'(\d+(?:\.\d+)?)vh', r'\1cqh', content)

# 2. Update the CSS for .slide and add .slide-wrapper
css_old = """      .slide {
          width: 100cqi;
          height: 100cqh;
          height: 100dvh;
          overflow: hidden;
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          position: relative;
      }"""

css_new = """      body {
          background-color: #0f1115; /* Letterbox background */
      }
      .slide {
          width: 100vw; /* Keep slide viewport sized */
          height: 100vh;
          height: 100dvh;
          overflow: hidden;
          scroll-snap-align: start;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
      }
      .slide-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          /* Strict 16:9 Aspect Ratio */
          max-width: calc(100vh * 16 / 9);
          max-height: calc(100vw * 9 / 16);
          background: var(--bg-gradient);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          container-type: size;
          box-shadow: 0 0 50px rgba(0,0,0,0.5);
      }"""

# Note: The CSS replacement above relies on the exact string. Let's do it smarter.
# We will use regex to find the .slide CSS block.
content = re.sub(r'\.slide\s*\{[^}]+\}', css_new, content, count=1)

# 3. Wrap slide contents
# Find all <section class="slide"> ... </section>
def wrap_slide(match):
    inner = match.group(1)
    return f'<section class="slide">\n      <div class="slide-wrapper">{inner}</div>\n    </section>'

content = re.sub(r'<section class="slide">(.*?)</section>', wrap_slide, content, flags=re.DOTALL)

with open('public/presentations/clinic/index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated successfully!")
