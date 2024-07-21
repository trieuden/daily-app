-- Active: 1711168995727@@127.0.0.1@3306@daily_app

INSERT INTO `roles` (`name`) VALUES
('admin'),
('manager'),
('user');

INSERT INTO `users` (`username`, `password`, `name`, `gender`, `phone`, `email`, `address`, `image`, `role_id`) VALUES
('user1', 'password1', 'User One', 1, '1234567890', 'user1@gmail.com', '123 Street, City', 'image1.jpg', 3),
('user2', 'password2', 'User Two', 2, '0987654321', 'user2@gmail.com', '456 Avenue, Town', 'image2.jpg', 3),
('admin', 'adminpassword', 'Administrator', 1, '9876543210', 'admin@gmail.com', '789 Road, Metropolis', 'admin_image.jpg', 1),
('manager1', 'managerpassword', 'Manager One', 2, '0123456789', 'manager1@gmail.com', '321 Lane, Village', 'manager_image.jpg', 2),
('manager2', 'managerpassword', 'Manager Two', 2, '5678901234', 'manager2@gmail.com', '654 Boulevard, Hamlet', 'manager_image.jpg', 2);

INSERT INTO `spends` (`total`,`created_date`, `user_id`) VALUES
(10000,'2024-05-25',1);

INSERT INTO `spend_types` (`name`, `image`, `price`) VALUES
('Ăn Sáng', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMJSURBVFiF7dZbiFVlFAfw3xwvc0bTGYQ00knKC2mFRhGYWikVlhgJZqTSQyWWYC+iPUQEJaloBHYhFcsoSAe6PZhRRCiEdjPTqZgkrWlw1MjLjA2VYT6s7+Se7SgOZ8qX+cPmnL3W+tZ9rW/TjW5cYFSUcfYyTMQQ/I2vsBUn/0sHipiN+eiLLdiHStyEnrgHhzqp97wwA4dxEI+cRWYxNna14SvwoYh2DCbjG7wkIs6iIKIvp7TtcAOacQD78SIuRW+sx9vokZGvSA707grjU9CI8em9Bovwi8hCAXV4LHNmLD7vCuOP4ncsQXWOdw1+wm2YiTczvFcxr1zjNycDc/ACPu1AZhR2oh7XJ9p1+BFV5RgfjxYsFfUvoRrr0Ocs54r4Gnd01mAh879SRPwG/sFzIsoJOIbfRNMVnIl1aEhOXNRZJ0pYipdztIkirfem989wdU5mIVpxXCylRhxNTx0WiPKcEyNwAu/h2hxvKHbhHexFvwxvNv7ESLEBNyV6AR+kgJaLhm7Aw6JcZ6AOc3EffsBK7ZdMX9H1NRnanSI7z4tpqUjRX5z4g9EkdsKToryrMS5vfDT+wBOi2arwOt5Fr468xST8LKahFnsSfY2YnhLexy2ilJsz9KfF2lbAdLyC/tgtuv9+MQ2LOjB+q0jvQ/heLKaeIjv1ohwl1GO46I3aDP1ZUb6phaTwtWTsLrFiZ+JLXJ4zfjfWpui/y9BbRJla028JJ0Vp/tI+m0fFhfZ4AVdhR2LsFGv2ATHTyzKHForSzBJlasvwDiU9I8WNWUIbBqYsNOeC2YYr4YhzoweeSU6uEI23OCdzo8jIx8lgCbXi5mzE7bkzo5NO32pfnyyGJKUblLFgOsAwsbRmwFNYlROocvpC2oMHxXdBOagWZV0vMjKLaJCi6OoWbBeNNwUfifkdKkZrnPgWaBBfRc2imVqTgeMiS5XizuiXAqlNOov4Qoz3W0n+3y+XCkwTTdSET5KRPIpiaw7CJRjg9O1Xkxw6kZS3padJjOGv55+sbnTjf8Qpjq6pNDrULbwAAAAASUVORK5CYII=', 20000),
('Coffee', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALSSURBVFiFxdddiFVlFAbg5zjjOJOOJmGFY4I/FJlJoSZS6p1dCBJCgWjTjRAhotBFd1EXDQoFUknFIIhejJheKP4R6U0ljCPOiD8xaA1NkYFYktrPZI0X6zu459CcM+ecOeMLm/3z7W997177Xe/am+rRjG8xbxRiVYx1+OZ+EhiH39BUycTRwGQM4K+xIrBAvHvIYTc+wyCew/haE1iJL9GACXgcvWnsNeytMG5ZOIKX0/Fc9KXjOpzHopEEqUYDnWlhuCJeyQP4F2cyYzVBHb7CqnS+OJGQSHynxr7QhkMig834IUOmAx/WcnGYjvp0nMNjmbGZtV58VJErMfYWZpURbxDbRHXMSdcO4uhwE+qHG8B8vIp3yiRwTfSFPiHIdryOm+jCH9kJxTKwEF/gbBkEClGHpdiPqSnmR9iK/0ZC4BO8UQWBJuwTzvmLyNBOXB1J3IXCbqvBRGFMp9Evnn4CevACo9cNi+GqaFBz07YG28U3xJgQyGMAu7AClzC7FIHbmFTlok1p4TwWiep4BNcpXob9qne1GUL9b6dYS/C8KM3D/H8GFoh+3oWHpVRViOU4Kb6Uvk4E1qeYHUSdFmIZLgp/n5buuSLUe7uMxXP4WBjQmTT/XVFda/B74YQGIY46UbfnsRZ/imxcEqY0f4QE1oqWvUX4yQeiYw7rPavwORrxvRDMm3gvjU/D+2msmIHBU/gJT5ZimdXAo0Khd9CKy8KtbghBdorG1KL4R+dKHMMG8cNSFPkqaMHfeAkHErHjwrFOpf2vWI2nhVAHC2I1YyNexGbRlJ7BOTwhXDGLXtzKp/KE6Fy3SjEuE/+IjroDD2WuzxIC3Z7PQC9eEULryWwXDDWSSvAgPhXZeDbtp4jXOkRMDUI82RvnCTFdq2DhnKj3BnS791DdQmuDhQSGC9ImLHVPmQTasUmJn9ZiVkyw/FGUX2uZBBrxc6mb7gIKDZChZcn8pAAAAABJRU5ErkJggg==', 25000),
('Ăn trưa', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALbSURBVFiFzdZfaNVlGAfwz+ahbTRBxZxaI1AhR1Cyi5wIMbWI2VJqF8M/2JXUpWJUEupFkFCICt4IleAf0gkiSIX/GuVSLxykU8tSW0WZGkZ/QKELu3jew36dndmm5xz8wuGc93l/v/f5nuf5Ps/7cJ9jAt7Ap2guh4PqO+zV4wtMxHasrzSBWtRgF3L4thwECvEwHsqsX8QFrMJZVJXT+Qu4hB/xZMbehp5E5J1SOx2VvqeKUC9I63r0pt+XsAEH8bSIQq8SR6MJX+N1LEY/Hs/s94r0PIJPhB5u4YyI3F2TyUfgN1zGFLyG3Xgf43EaHTiMH3AeM/AZ6hLhBSJ1jfgAr4qo3kjk/h4JqWdxMx2yBn34JxG4gCO4jlnJ6QS8jK6091c6Y5OI0nmcxNiRkNiHpZl1TqTnmojSavyCA0Xe7cSv+AZ7k+09HMPs4RJoxtEi9gYDacvjQ+wssNVgOX7C81iGbpzDkuEQGCN0UYhqbMP8jK0J0xOx/TiFz0UKp4t//ida8JjQ1B0xC8dFnluSbTbeEjn+TuR+RcF7DaJkpwjR9iT7KOxJZy4UURgSjenweUJI/UJMZ0Q37EgH1gqVE+JqSraLQvl/YKuoorr03DxRDeuGct4uFP9KWj+HK4nAg8lWK1S9LfPeu6I3jMvY8n2hW9ykebwpWnp7ofOZiX32yp2GyUWI1qTP3aI5+Xoqz3QRNuO2ETaM/0GHuFPWFtmrT/5WVokwzxE1fruEBH4X/WN0kb0qIdojOSGS9aLbVRI1qM3hK3yZviuJFlTnRPOYJGq8kmgT94tH8b3BLbaceAA/Y2K1uGLPifGrUngJJ8SlhajJvgo5rxPtfNCYP+yr8h7xNrYMtbkRc8vovF3MCWPyhsJZ7gkcEgPqtRI7bxDjW2sigcHKvypGrJkiT6VEKz7GR1ljrsiDO/CMgXGqVOhMZ/8HxQj0iSGyq8QEulWu0oaPfwEtdJb9XeS+BwAAAABJRU5ErkJggg==', 35000),
('Vé xe', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACpSURBVFiF7ZZLDoMwDAVHnKBwjnLlCs7Bp+qlypIu6lRpMQuk2mThkbKJI72JIyWBICiIFpiBBViNxgJMkrUJtwzWRL4kJincgMvBzh2hBjrJGvNC2r1leC6xAs98MrXGi09etbPgwf/P/a4F7Qm4U9wRuBECIRACxQpoV7F6lVoJuJOe49ohq0F5jkeZ7IwlGqCXrCEvnPElu/7atbw7Yf0pHbTwIDiNF/TJoHIX5IWbAAAAAElFTkSuQmCC', 5000),
('Ăn Tối', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANOSURBVFiFvddZiJdVGAbw34wzammYSzZODhHZflFNRkWBRBHIVBREK3ghhpG2EJVQYGHUTVlRQWFEFOWNCdliZosXFeQYllpW44SlmZRthNk+dfEcbfb/zDD/ea6+5Xznfc/zPu9zzkd1MBPf4CnUVylGv3gZc7AH08qzOXgAEzoPrK1C8BNxHGrwLnYLI3dhCpZUIWYXPI2F2IpmjMXHuBif4ILOg4ebgSNwPvahHRtxH9bhQqzB2mGO2QX3YzE243ScjTap/2ZhY0g4AfOxCFdjai9jJojyr8OrGI9tuAI7RRc9UFMh8DQsw9FYje/L9Ww8J6v9s4y9HU2YhWsxF7/gDDwjLdkD/WmgAe9I3S7H36LwbULtdDxZFjEGC7BdWJiEs0pyu/sKXgkrhPJ5+AI34CIR1Vc4Da9LfediOT4UsW2XTmjHoUMJPl3oPrdMdqS013rciPOwBVfhA2mvu/EGnsdj+FJab9C4UhTbXib/VmhdISXYgV34HK3idj+VJJ7Av+V9a0l+i2imV3QWYS0exbG4RTy8CZ9hBh4WUe3AHaKRQ8RkTsLj6JByfC2q31kSGoVN+Kt7AnWdrueXgDfhWfxaVjCzrHa2mMhy8fo2fCf+/p4Y0FrcWubZgKMwDteIBe+S8vRgoL4Em4VXcGfJtlna7xIcLy35kmigsTx7UTqgQ2ifV+5bpJT1uBeXikZm4I/OtMOp+EiUvUFM5Z6SxEq8UGhuE3G2FKY68BqWSoe8hZOxqlC/RLqgFafg07KoLgyswplik/+USceWEuzFZPGAMeV+otR0D34TV9wnevgRh5dvfxA3HIffyze15Xq90iF1UuOZZfKRwMHCsv0JbJVd7P0RSuAY6RyEkk1S+5FCs3jDgQTW6scoqoAWvNn5wWgxjIYRCN4gXnDgoDpKlH+YlGFdlRNYLFp7u/uLKWKfjVUM3iirn9TXgJvF1SodUoaCGnHUBZUGrcFtVUhgkYi94uImiyVfP4zBF8hBZeJAP5gqx+kHpUOGitGyhW/U+yEWfVNykJwNzpEWXSrutczA//WaZJteKHvGoBLYj59xmZyM9sphdKAJrNTtP3Ao2CM72mAxXrbtiqir8P4R/x+rBoMaPDSQgf8B/w3IuU4SAB8AAAAASUVORK5CYII=', 40000);

INSERT INTO `spend_items` (`spend_id`,`spend_type_id`,`price`, `description`) VALUES
(1, 1,2000,'test'),
(1, 2,2000,'test'),
(1, 3,2000,'test'),
(1, 4,2000,'test'),
(1, 5,2000,'test');
INSERT INTO `notifications` (`title`, `content`,`created_date`,`status`, `user_id`) VALUES
('Notification One', 'content 1', '2024-05-25', true, 1),
('Notification Two', 'content 2', '2024-05-25', true, 2),
('Notification Three', '', '2024-05-25', true, 3),
('Notification Four', '', '2024-05-25', FALSE, 4),
('Notification Five', '', '2024-05-25',FALSE, 5);

INSERT INTO `notes` (`title`, `content`, `image`, `user_id`) VALUES
('Note One', 'Content for Note One', 'note1_image.jpg', 1),
('Note Two', 'Content for Note Two', 'note2_image.jpg', 2),
('Note Three', 'Content for Note Three', 'note3_image.jpg', 3),
('Note Four', 'Content for Note Four', 'note4_image.jpg', 4),
('Note Five', 'Content for Note Five', 'note5_image.jpg', 5);
