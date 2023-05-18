import { Button } from '../Button/button';
import { formatAmount } from '../../styles/Utils/format';

export function AccountCards({ accountName, amount, balanceType }) {
  return (
    <article className="accountCardContainer">
      <div>
        <h3>Argent Bank {accountName}</h3>

        <span className="amount">${formatAmount(amount)}</span>

        <p>{balanceType} Balance</p>
      </div>

      <div>
        <Button type="button" text="View transations" />
      </div>
    </article>
  );
}
