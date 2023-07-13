import classes from './Card.module.css';

export default function Card({ children, todo }) {
    let cardclass = classes.container;
    if (todo) cardclass = cardclass + ' ' + classes.todoCard;

    return (
        <div className={cardclass}>{children}</div>
    );
}