
import WorkCard from "./WorkCard";
import InfoBox from "./InfoBox";
import Button from "./Button";
import { works } from "../data/works";

function Main() {
  return (
    <main>
      <section className="hero" id="about">
        <p className="hero-label">ТВОРЧЕ ПОРТФОЛІО</p>
        <h1>Створюю історії<br />через об'єктив</h1>
        <p className="hero-description">
          Фотографія — це спосіб зберегти те, що неможливо
          повторити. Емоції, погляди, атмосферу та маленькі
          моменти, які з часом стають найціннішими спогадами.
        </p>
        <a href="#works" className="hero-link">
          <Button>Переглянути роботи</Button>
        </a>
      </section>

      <section className="photographer-section">
        <div className="about-photo">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85"
            alt="Портрет фотографки"
          />
          <p>За кожним кадром — своя історія</p>
        </div>

        <div className="about-content">
          <p className="section-label">ТРОХИ ПРО МЕНЕ</p>
          <h2>Привіт, я Анастасія — фотографка</h2>
          <p>
            Я вірю, що найкращі фотографії народжуються
            не тоді, коли людина ідеально позує, а тоді,
            коли вона просто залишається собою.
          </p>
          <p>
            Моя любов до фотографії почалася з бажання
            зупиняти час. Мені завжди хотілося зберігати
            моменти, до яких можна повертатися знову:
            щирий сміх, теплі обійми, закохані погляди
            та красу звичайного дня.
          </p>
          <p>
            У своїх роботах я поєдную природне світло,
            ніжні кольори та емоційну атмосферу.
            Мені близький стиль, у якому немає зайвого —
            лише люди, почуття та справжність.
          </p>
          <p>
            Для мене кожна зйомка — це маленька творча
            пригода. Я допомагаю розслабитися перед камерою,
            відчути себе красивими та отримати не просто
            фотографії, а спогади, які залишаться надовго.
          </p>
          <a href="#contacts" className="hero-link">
            <Button>Зв'язатися зі мною</Button>
          </a>
        </div>
      </section>

      <section className="approach-section">
        <InfoBox title="Мій стиль">
          Легкість, природність і щирі емоції.
          Я люблю теплі відтінки, м'яке світло,
          живі кадри та деталі, які створюють атмосферу.
        </InfoBox>

        <InfoBox title="Мій підхід">
          Не потрібно вміти позувати чи знати,
          як поводитися перед камерою. Я допоможу
          знайти комфорт, підкажу з рухами та створю
          атмосферу, у якій можна бути собою.
        </InfoBox>

        <InfoBox title="Моє натхнення">
          Мене надихають люди, архітектура,
          подорожі, музика, сонячні промені
          та випадкові красиві моменти.
          Саме з них часто народжуються найкращі кадри.
        </InfoBox>
      </section>

      <section className="works-section" id="works">
        <p className="section-label">ВИБРАНІ ПРОЄКТИ</p>
        <h2>Мої роботи</h2>
        <p className="works-description">
          Кожна фотографія — це окрема історія.
          Тут зібрані моменти, які мені особливо близькі:
          від ніжних портретів до емоційних історій кохання.
        </p>

        <div className="works-grid">
          {works.map((work) => (
            <WorkCard
              key={work.id}
              title={work.title}
              category={work.category}
              year={work.year}
              likes={work.likes}
              isNew={work.isNew}
              available={work.available}
              description={work.description}
              images={work.images}
            />
          ))}
        </div>
      </section>

      <section className="contact-section" id="contacts">
        <p className="section-label">ТВОЯ ІСТОРІЯ ПОЧИНАЄТЬСЯ ТУТ</p>
        <h2>Давай створимо<br />щось прекрасне</h2>
        <p className="contact-description">
          Якщо тобі близька моя естетика — напиши мені.
          Обговоримо твою ідею, підберемо локацію
          та створимо фотографії, які захочеться
          переглядати знову і знову.
        </p>
        <a href="mailto:hello@anstudio.com" className="hero-link">
          <Button>Написати мені</Button>
        </a>
      </section>
    </main>
  );
}

export default Main;
