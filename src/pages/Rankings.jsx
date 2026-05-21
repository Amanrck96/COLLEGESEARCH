import React, { useState, useContext } from 'react';
import { Container, Card, Badge, ProgressBar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CollegeContext } from '../contexts/CollegeContext';

const Rankings = () => {
  const { colleges } = useContext(CollegeContext);
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const rankedColleges = React.useMemo(() => {
    let list = [...(colleges || [])];
    
    if (filter !== 'All') {
      list = list.filter(c => {
        const queryLower = filter.toLowerCase();
        const isMba = queryLower === 'management';
        const isEng = queryLower === 'engineering';
        const isMed = queryLower === 'medical';
        const isDes = queryLower === 'design';
        const isLaw = queryLower === 'law';

        if (isMba) {
          return (c.courses || []).some(co => 
            co.type?.toUpperCase().includes('MANAGEMENT') || 
            co.title?.toUpperCase().includes('MBA') || 
            co.title?.toUpperCase().includes('PGDM')
          ) || c.name.toLowerCase().includes('management') || c.name.toLowerCase().includes('business') || c.name.toLowerCase().includes('iim');
        }
        if (isEng) {
          return (c.courses || []).some(co => 
            co.type?.toUpperCase().includes('ENGINEERING') || 
            co.type?.toUpperCase().includes('TECHNOLOGY') || 
            co.title?.toUpperCase().includes('B.TECH') || 
            co.title?.toUpperCase().includes('BTECH')
          ) || c.name.toLowerCase().includes('technology') || c.name.toLowerCase().includes('polytechnic') || c.name.toLowerCase().includes('engineering') || c.name.toLowerCase().includes('iit') || c.name.toLowerCase().includes('nit');
        }
        if (isMed) {
          return (c.courses || []).some(co => 
            co.type?.toUpperCase().includes('MEDICAL') || 
            co.type?.toUpperCase().includes('PHARMACY') || 
            co.title?.toUpperCase().includes('MBBS')
          ) || c.name.toLowerCase().includes('medical') || c.name.toLowerCase().includes('pharmacy') || c.name.toLowerCase().includes('dental') || c.name.toLowerCase().includes('nursing');
        }
        if (isDes) {
          return (c.courses || []).some(co => 
            co.type?.toUpperCase().includes('DESIGN') || 
            co.type?.toUpperCase().includes('ARTS') || 
            co.title?.toUpperCase().includes('DESIGN')
          ) || c.name.toLowerCase().includes('design') || c.name.toLowerCase().includes('fashion') || c.name.toLowerCase().includes('arts') || c.name.toLowerCase().includes('nift');
        }
        if (isLaw) {
          return (c.courses || []).some(co => 
            co.type?.toUpperCase().includes('LAW') || 
            co.title?.toUpperCase().includes('LLB')
          ) || c.name.toLowerCase().includes('law') || c.name.toLowerCase().includes('legal');
        }
        return true;
      });
    }

    return list
      .filter(c => c.ranking && c.ranking > 0)
      .sort((a, b) => {
        if (a.ranking !== b.ranking) return a.ranking - b.ranking;
        return (b.rating || 0) - (a.rating || 0);
      });
  }, [colleges, filter]);

  return (
    <div className="pt-2 bg-light min-vh-100 pb-5">
      <div className="bg-primary text-white py-5 text-center">
        <Container>
          <h1 className="fw-bold mb-3">College Rankings 2026</h1>
          <p className="fs-5 opacity-75">Compare college rankings dynamically across different streams and locations.</p>
        </Container>
      </div>

      <Container className="mt-5">
        <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
          {['All', 'Engineering', 'Medical', 'Management', 'Design', 'Law'].map(cat => (
            <Badge 
              key={cat} 
              pill 
              bg={filter === cat ? 'warning' : 'white'} 
              text="dark"
              className="px-4 py-2 border shadow-sm"
              style={{cursor:'pointer', fontSize: '15px'}}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>

        <Card className="border-0 shadow-sm overflow-auto">
          <Card.Body className="p-0">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-white">Rank</th>
                  <th className="text-white">Institute Name</th>
                  <th className="text-white">Location</th>
                  <th className="text-white">Type</th>
                  <th className="pe-4 text-white">Rating</th>
                </tr>
              </thead>
              <tbody>
                {rankedColleges.slice(0, 50).map((r, index) => (
                  <tr 
                    key={r.id} 
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate(`/college/${r.id}`)}
                  >
                    <td className="px-4 fw-bold fs-5 text-primary">#{index + 1}</td>
                    <td>
                      <div className="fw-bold text-dark">{r.name}</div>
                      <span className="text-muted small">NIRF rank: #{r.ranking}</span>
                    </td>
                    <td>{r.location}, {r.state}</td>
                    <td><Badge bg={r.type === 'Government' ? 'success' : 'info'}>{r.type}</Badge></td>
                    <td className="pe-4">
                      <div className="d-flex align-items-center">
                        <ProgressBar now={r.rating * 20} className="w-50 me-2" variant="warning" />
                        <span className="fw-bold">{r.rating}</span>
                      </div>
                    </td>
                  </tr>
                ))}
                {rankedColleges.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center py-5 text-muted">
                      No colleges ranked in this category yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Rankings;
