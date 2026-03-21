import s from "./co.module.css";
import { Article, Section } from "../../../components/stsuct/sections/sections";

export const ContactMe = () => {
    return (
        <Section id="contactMe" title="Свяжитесь со мной" className={s.contactMe}>
            <Article>
                Здесь вы можете связаться со мной
                <br />
                email: 4ndrey.Tkachenko@gmail.com
                <br />
                telegram: @tkachenko
                <br />
                phone: +380971234567
            </Article>
        </Section>
    )
}   