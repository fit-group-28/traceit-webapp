
export default function ModalCard({ visible, title, onClose, onSave, children }) {
    return (
        <div data-testid="modal" className={`modal${visible ? ' is-active' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{title}</p>
                    <button onClick={onClose} className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    {children}
                </section>
                <footer className="modal-card-foot">
                    <button data-testid="save-btn" className="button is-success" onClick={onSave}>Submit</button>
                    <button data-testid="close-btn" className="button" onClick={onClose}>Cancel</button>
                </footer>
            </div>
        </div>
    );
}
