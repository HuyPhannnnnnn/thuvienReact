import styles from './button.module.scss'
import clsx from 'clsx'

function Button({ primary,danger }) {
    const classes = clsx(styles.btn,{
        [styles.primary] : primary,
        [styles.danger] : danger ,
        'd-flex' : true //bỏ nằm ngang
    })

    return (
        <button className={classes}>Click Me!</button>
    )
}

export default Button