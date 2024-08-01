import React from "react"
import './AboutUs.css'
import './Cards.css';
import AboutUsBox from './AboutUsBox.js';

export default function AboutUs() {
  function scrollToTop() {
    window.scrollTo(100, document.body.scrollHeight);
}
    return (
        <div class="section" scrollToTop>
		<div class="container">
			<div class="content-section">
				<div class="title">
					<h1>מידע עלינו</h1>
				</div>
				<div class="content">
					<h3> בגדים צנועים ואופנתיים לנשים</h3>
					<p>הצורך שלנו מתחיל מהבטן, כיום אני בתור אישה דתייה שמתלבשת באופן צנוע, מאוד מתקשה לרכוש בגדים עבורי. מאוד חשוב לי ללבוש בגד שאני מרגישה איתו בנוח, שהוא אופנתי והכי חשוב שאני מתחברת אליו והוא יפה בעיני.
אני מסתובבת שעות בקניונים, בירידי בגדים, באתרי אופנה, אך לצערי לוקח לי שעות ולפעמים שבועות למצוא בגדים שמתאימים לי גם בצורך הערכי – שהבגד יהיה צנוע עבורי, וגם בצורך הריגשי – שהבגד יהיה אופנתי עבורי וארגיש בו מספיק נח ויפה. 

כיום אופנה צנועה ואופנתית איננה נגישה מספיק כמו שאר פרטי הלבוש הקיימים.
הפרויקט נותן מענה לצורך זה מכיוון שאנו בונים "פלטפורמה" שמאגדת פרטי אופנה צנועים ואופנתיים משלל מעצבים ומותגים.

הלקוחה תכנס לפלטפורמה ויהיה לה מגוון רחב של אפשרויות של בגדים צנועים שתוכל לבחור על מנת למצוא את הבגד שהיא הכי תאהב ועונה לדרישותיה הצנועות והאופנתיות.
כאשר הלקוחה תראה פריט באתר שהיא אוהבת היא תוכל להיכנס לאתר של הפריט שאהבה על מנת לרכוש אותו ישירות משם.
האתר מנגיש ללקוחות שלנו פרטי אופנה צנועים וחוסך לה המון זמן ותסכול בחיפוש אחר בגדים שעונים לערכייה.</p>
					<div class="button">
						<a href="/">Back To Homepage</a>
					</div>
				</div>
				<div class="social">
					<a href="/SoonWillBe"><i class="fab fa-facebook-f"></i></a>
					<a href="/SoonWillBe"><i class="fab fa-twitter"></i></a>
					<a href="/SoonWillBe"><i class="fab fa-instagram"></i></a>
				</div>
			</div>
            
		</div>
        <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className='cards__items'>
            <AboutUsBox
              src='/images/Tehila.png'
              text='BA in Business Administration. Project Manager at the Ministry of Defense Head of Coordination'
              label='Tehila Pines - Founder'
            />
            <AboutUsBox
              src='/images/nairoz.png'
              text="Bachelor's degree in pharmaceutical engineering,Analyst in a research and development laboratory at Dexcel"
              label='Nairooz Emad Atamleh - Director'
            />
          </div>
          <ul className='cards__items'>
            <AboutUsBox
              src='/images/Idan.png'
              text="Bachelor's degree in Electronics Engineering, FPGA DESIGN at Intel, Prototype Types - Acceptance of the requirement, proof of feasibility, assimilation of new components and activation of prototype in the laboratory."
              label='Idan Reuveni - Senior Partner'
            />
            <AboutUsBox
              src='/images/Alon.png'
              text='A bachelor’s degree in electrical and electronics engineering, NPI at Orcam, is responsible for moving from development to creation.'
              label='Alon Narkiss - Senior Partner'
            />
            <AboutUsBox
              src='/images/Nir.png'
              text='Undergraduate student in software engineering at Azrieli College, IDF officer in the IT department'
              label='Nir Elgrabli - Softwere enginere '
            />
          </ul>
        </div>
      </div>
	</div>)
}