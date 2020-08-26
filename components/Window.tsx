import type { FC } from 'react';
import { Rnd } from 'react-rnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMinusCircle,
  faPlusCircle,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Window.module.scss';

type Window = {
  name: string;
  onMinimize: () => void;
  onClose: () => void;
  onFocus: () => void;
  onBlur: () => void;
  tabIndex: number;
};

export const Window: FC<Window> = ({
  children,
  name,
  onMinimize,
  onClose,
  onFocus,
  onBlur,
  tabIndex
}) => (
  <li>
    <Rnd
      className={styles.window}
      dragHandleClassName="handle"
      cancel=".cancel"
      default={{
        x: 25,
        y: 25,
        width: 225,
        height: 225
      }}
      tabIndex={tabIndex}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <header className="handle">
        <h1>{name}</h1>
        <nav className="cancel">
          <button id={styles.close} onClick={onClose}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
          <button id={styles.minimize} onClick={onMinimize}>
            <FontAwesomeIcon icon={faMinusCircle} />
          </button>
          <button id={styles.maximize}>
            <FontAwesomeIcon icon={faPlusCircle} />
          </button>
        </nav>
      </header>
      <article>{children}</article>
    </Rnd>
  </li>
);
