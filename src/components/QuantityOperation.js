export default function QuantityOperation({ value, onChange, isReadOnly }) {
    if (isReadOnly) {
        return <span>{value}</span>
    }

    return (
        <div className="quantity-operation">
            <button
                style={{ marginTop: 5 }}
                className="button is-small is-rounded"
                onClick={() => {
                    if (value > 0) {
                        onChange(value - 1);
                    }
                }}
            >
                <span className="icon is-small">
                    <i class="fas fa-minus"></i>
                </span>
            </button>
            <input
                style={{ width: 50, marginLeft: 10, marginRight: 10, textAlign: "center" }}
                className="input"
                type="text"
                value={value}
                onChange={(e) => {
                    const value = Number(e.target.value);
                    if (value >= 0) {
                        onChange(value);
                    }

                }}
            />
            <button
                style={{ marginTop: 5 }}
                className="button is-small is-rounded"
                onClick={() => {
                    onChange(value + 1);
                }}
            >
                <span className="icon is-small">
                    <i class="fas fa-plus"></i>
                </span>
            </button>

        </div>
    );
}