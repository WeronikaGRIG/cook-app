
import style from './RatingCard.module.scss';

const cards = [
    { quantity: 100, symbol: '+', description: 'Talented Tutors' },
    { quantity: 1000, symbol: '+', description: 'Students' },
    { quantity: 4.8, symbol: '&#9733;', description: 'Rating' },
    { quantity: 20, symbol: '+', description: 'Cooking Categories' }
]

export default function RatingCard() {
    return (
        <section>
            <div className={style.container}>
                <div className={style.wrapper}>
                    {cards.map((card, index) => (
                        <div className={style.card} key={index}>
                            <h2
                                className={style.card__quantity}>
                                {card.quantity}
                                {card.symbol === '&#9733;' ? (
                                    <span dangerouslySetInnerHTML={{ __html: card.symbol }} className={style.symbol__star} />
                                ) : (
                                    card.symbol
                                )}
                            </h2>
                            <p
                                className={style.card__description}>
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}
