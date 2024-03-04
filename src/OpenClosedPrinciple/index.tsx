import { FC, ReactElement } from "react";

type Props = {
    title: string;
    type: "default" | "withLinkButton" | "withNormalButton";
    href?: string;
    buttonText?: string;
    onClick?: () => void;
};

type TitleProps = {
    children: ReactElement;
    title: string;
}

const Title: FC<TitleProps> = ({ title, children }) => {
    return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>{title}</h1>
        {children}
    </div>)

} 

type TitleWithLinkProps = {
    title: string,
    href: string,
    buttonText: string
}

export const TitleWithLink: FC<TitleWithLinkProps> = ({ title, href, buttonText }) => {
    return (
        <Title title={title}>
         <div>
            <a href={href}>{buttonText}</a>
         </div>
        </Title>
    )
}

type TitleWithButtonProps = {
    title: string;
    buttonText: string;
    onClick: () => void;
}

export const TitleWithButton: FC<TitleWithButtonProps> = ({
    title,
    buttonText,
    onClick
}) => {
    return (
        <Title title={title}>
            <button onClick={onClick}>{buttonText}</button>
        </Title>
    )
}

/* const Title: FC<Props> = ({
    title,
    type,
    href,
    buttonText,
    onClick,
}) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>{title}</h1>

            {type === "withLinkButton" && (
                <div onClick={onClick}>
                    <a href={href}>{buttonText}</a>
                </div>
            )}

            {type === "withNormalButton" && (
                <button onClick={onClick}>{buttonText}</button>
            )}
        </div>
    );
};
 */
export default Title;