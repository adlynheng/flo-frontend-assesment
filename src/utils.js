/**
 * Renders a single INSERT statement with lightweight syntax colouring.
 * The SQL is tokenised line-by-line so we can apply colours without a
 * third-party highlighter.
 */
function highlightSql(sql) {
  return sql.split("\n").map((line, i) => {
    // Header lines: INSERT INTO … / VALUES
    if (/^INSERT INTO|^VALUES/.test(line.trimStart())) {
      return (
        <span key={i} className="block">
          {line.split(/\b(INSERT INTO|VALUES|meter_readings)\b/).map((tok, j) =>
            /^(INSERT INTO|VALUES|meter_readings)$/.test(tok) ? (
              <span key={j} className="text-purple-600">
                {tok}
              </span>
            ) : tok.includes("(nmi") ? (
              <span key={j} className="text-slate-600">
                {tok}
              </span>
            ) : (
              <span key={j} className="text-slate-600">
                {tok}
              </span>
            )
          )}
        </span>
      );
    }

    // Value lines:  ('NMI', 'TIMESTAMP', CONSUMPTION),
    if (/^\s+\(/.test(line)) {
      // Parse the three values out
      const match = line.match(
        /^(\s*\()('(?:[^']*)')(\s*,\s*)('(?:[^']*)')(\s*,\s*)([\d.]+)(\)(?:,|;)?)(.*)$/
      );
      if (match) {
        const [, open, nmi, comma1, ts, comma2, val, close] = match;
        return (
          <span key={i} className="block">
            <span className="text-slate-500">{open}</span>
            <span className="text-green-600">{nmi}</span>
            <span className="text-slate-500">{comma1}</span>
            <span className="text-amber-600">{ts}</span>
            <span className="text-slate-500">{comma2}</span>
            <span className="text-cyan-600">{val}</span>
            <span className="text-slate-500">{close}</span>
          </span>
        );
      }
    }

    // Semicolons / misc
    return (
      <span key={i} className="block text-slate-600">
        {line}
      </span>
    );
  });
}
